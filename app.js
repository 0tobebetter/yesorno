      // 앱 상태
      // ════════════════════════════════
      let currentCard = null,
        drawn = false;

      function updateCount() {
        const v = document.getElementById("qInput")?.value.length || 0;
        const el = document.getElementById("charCount");
        el.textContent = `${v} / 100`;
        el.className =
          "char-count" + (v >= 100 ? " over" : v >= 80 ? " warn" : "");
      }

      // 뽑기 시각 기록 (간격 분석용)
      function getDrawTimesKey() { return getTodayKey() + "_times"; }
      function getDrawTimes() {
        try { return JSON.parse(localStorage.getItem(getDrawTimesKey()) || "[]"); }
        catch (e) { return []; }
      }
      function recordDrawTime() {
        const times = getDrawTimes();
        times.push(Date.now());
        localStorage.setItem(getDrawTimesKey(), JSON.stringify(times));
      }

      // ════════════════════════════════
      // 카카오 공유
      // ════════════════════════════════
      function shareToKakao() {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({ event: "share_result", method: "kakao" });

        const c = currentCard;
        if (!c) return;

        if (typeof Kakao === "undefined") {
          showToast(getT().toastKakaoLoading);
          const tryInit = setInterval(() => {
            if (typeof Kakao !== "undefined") {
              clearInterval(tryInit);
              Kakao.init("d661394f4398fbc9ec3574508826a844");
              doKakaoShare(c);
            }
          }, 300);
          setTimeout(() => clearInterval(tryInit), 5000);
          return;
        }

        if (!Kakao.isInitialized()) {
          Kakao.init("d661394f4398fbc9ec3574508826a844");
        }
        doKakaoShare(c);
        grantShareBonus();
      }

      function doKakaoShare(c) {
        const isEn = getLang() === "en";
        const verdict = c.isYes ? "YES" : "NO";
        const title = isEn
          ? `YES or NO Tarot — ${verdict} (${c.confidence})`
          : `YES or NO 타로 — ${verdict} (${c.confidence})`;
        const desc = c.desc.length > 80 ? c.desc.slice(0, 80) + "…" : c.desc;

        Kakao.Share.sendDefault({
          objectType: "feed",
          content: {
            title,
            description: desc,
            imageUrl: "https://yesorno-tarot.vercel.app/og-image.png",
            link: {
              mobileWebUrl: "https://yesorno-tarot.vercel.app/",
              webUrl: "https://yesorno-tarot.vercel.app/",
            },
          },
          buttons: [
            {
              title: isEn ? "Try it yourself" : "나도 뽑아보기",
              link: {
                mobileWebUrl: "https://yesorno-tarot.vercel.app/",
                webUrl: "https://yesorno-tarot.vercel.app/",
              },
            },
          ],
        });
      }

      function drawCard() {
        if (drawn || getQuotaUsed() >= getMaxQuota()) return;
        drawn = true;
        recordDrawTime();
        document.getElementById("drawBtn").disabled = true;

        const key = CARD_KEYS[Math.floor(Math.random() * CARD_KEYS.length)];
        const data = DESCS[key];
        const dataEn = (typeof DESCS_EN !== "undefined" && DESCS_EN[key])
          ? DESCS_EN[key]
          : { confidence: data.confidence, descs: data.descs };
        const catVal = document.getElementById("catSelect").value;
        const catIdx =
          catVal && CAT_MAP[catVal] !== undefined ? CAT_MAP[catVal] : 6;
        // GA4 카테고리 선택 이벤트
        if (catVal) {
          window.dataLayer = window.dataLayer || [];
          dataLayer.push({ event: "category_selected", category: catVal });
        }
        const qText = document.getElementById("qInput")?.value.trim() || "";
        const isEn = getLang() === "en";

        currentCard = {
          key,
          confidence: isEn ? dataEn.confidence : data.confidence,
          confidenceKo: data.confidence,
          confidenceEn: dataEn.confidence,
          isYes: data.yes,
          desc: isEn ? dataEn.descs[catIdx] : data.descs[catIdx],
          descKo: data.descs[catIdx],
          descEn: dataEn.descs[catIdx],
          cat: catVal,
        };

        // 카드 앞면 SVG
        document.getElementById("cardFront").innerHTML =
          `<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">${SVG_DEFS[key]}</svg>`;

        // 숨겨진 공유 카드 채우기
        document.getElementById("sc-svg").innerHTML = SVG_DEFS[key];
        document.getElementById("sc-verdict").textContent = data.yes
          ? "YES."
          : "NO.";
        document.getElementById("sc-badge").textContent = data.confidence;
        document.getElementById("sc-desc").textContent = data.descs[catIdx];

        // OG 태그 업데이트
        document
          .getElementById("og-title")
          .setAttribute("content", `${data.confidence} | YES or NO 타로`);
        document
          .getElementById("og-desc")
          .setAttribute("content", data.descs[catIdx]);

        setTimeout(
          () => document.getElementById("cardInner").classList.add("flipped"),
          200,
        );
        setTimeout(() => {
          const isEnNow = getLang() === "en";
          document.getElementById("resultArea").classList.remove("hidden");
          document.getElementById("resultVerdict").textContent = data.yes ? "YES." : "NO.";
          document.getElementById("resultBadge").textContent = currentCard.confidence;
          document.getElementById("resultDesc").textContent = currentCard.desc;
          updateDivider();
          document.getElementById("drawBtn").style.display = "none";
          document
            .getElementById("formArea")
            .querySelector(".field-label")
            .closest("#formArea").style.display = "none";
          // 질문 입력했으면 체크박스 표시
          const qText = document.getElementById("qInput")?.value.trim() || "";
          const includeWrap = document.getElementById("includeQWrap");
          if (qText) {
            includeWrap.classList.remove("hidden");
          } else {
            includeWrap.classList.add("hidden");
          }
          // 횟수 차감
          incrementQuota();
          renderQuota();

          // GA4 이벤트
          window.dataLayer = window.dataLayer || [];
          dataLayer.push({
            event: "card_drawn",
            card_name: key,
            category: catVal || "none",
            result: data.yes ? "yes" : "no",
            confidence: data.confidence,
          });

          // 기본 3회 소진 시 간격 분석 이벤트
          if (getQuotaUsed() === 3) {
            const times = getDrawTimes();
            if (times.length >= 3) {
              const spanMin = Math.round((times[2] - times[0]) / 60000);
              const avgIntervalMin = Math.round((times[2] - times[0]) / 60000 / 2);
              dataLayer.push({
                event: "quota_exhausted",
                span_minutes: spanMin,
                avg_interval_minutes: avgIntervalMin,
                draw_count: times.length,
              });
            }
          }

          // Supabase 저장
          saveToSupabase({
            card_name: key,
            category: catVal || null,
            question: qText || null,
            result: data.yes ? "YES" : "NO",
            confidence: data.confidence,
          });
        }, 1000);
      }

      function resetCard() {
        if (getQuotaUsed() >= getMaxQuota()) return;
        drawn = false;
        document.getElementById("cardInner").classList.remove("flipped");
        document.getElementById("resultArea").classList.add("hidden");
        const btn = document.getElementById("drawBtn");
        btn.disabled = false;
        btn.style.display = "";
        document.getElementById("formArea").style.display = "";
        const qInputEl = document.getElementById("qInput");
        if (qInputEl) { qInputEl.value = ""; updateCount(); }
        document.getElementById("catSelect").value = "";
        currentCard = null;
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          event: "draw_again",
        });
      }

      // ════════════════════════════════
      // 공유
      // ════════════════════════════════
      function getShareText() {
        const c = currentCard;
        if (!c) return "";
        return I18N[getLang()].shareText(c);
      }

      function grantShareBonus() {
        const granted = addBonusQuota();
        if (granted) {
          renderQuota();
          setTimeout(() => showToast(I18N[getLang()].toastBonus), 500);
        }
      }

      function shareToX() {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          event: "share_result",
          method: "x",
        });
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(getShareText())}`,
          "_blank",
        );
        grantShareBonus();
      }
      function shareToInstagram() {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          event: "share_result",
          method: "instagram",
        });
        if (navigator.clipboard) navigator.clipboard.writeText(getShareText());
        showToast(I18N[getLang()].toastInstaCopied);
        grantShareBonus();
      }
      function copyResult() {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          event: "share_result",
          method: "copy",
        });
        const t = getShareText();
        if (navigator.clipboard)
          navigator.clipboard
            .writeText(t)
            .then(() => showToast(I18N[getLang()].toastCopied));
        else {
          const ta = document.createElement("textarea");
          ta.value = t;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
          showToast(I18N[getLang()].toastCopied);
        }
      }
      async function saveImage() {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({ event: "share", method: "image_save" });

        const c = currentCard;
        if (!c) {
          showToast(I18N[getLang()].toastKakaoLoading);
          return;
        }

        const qText = document.getElementById("qInput")?.value.trim() || "";
        const includeQ =
          document.getElementById("includeQCheck") &&
          document.getElementById("includeQCheck").checked &&
          qText;
        showToast(I18N[getLang()].toastGenerating);

        try {
          const W = 400,
            PAD = 36,
            maxTextW = 400 - 36 * 2;
          const CARD_W = 120,
            CARD_H = 192;

          function wrapText(ctx, text, maxW) {
            const words = text.split(" ");
            const lines = [];
            let line = "";
            for (const w of words) {
              const test = line ? line + " " + w : w;
              if (ctx.measureText(test).width > maxW) {
                lines.push(line);
                line = w;
              } else line = test;
            }
            if (line) lines.push(line);
            return lines;
          }

          // SVG → Image 로드 시도 (실패해도 계속 진행)
          let cardImg = null;
          try {
            const svgHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 320">${SVG_DEFS[c.key]}</svg>`;
            const svgDataUrl =
              "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgHTML);
            cardImg = await Promise.race([
              new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = svgDataUrl;
              }),
              new Promise((_, reject) =>
                setTimeout(() => reject(new Error("timeout")), 3000),
              ),
            ]);
          } catch (e) {
            console.warn("카드 이미지 로드 실패, 텍스트만 표시:", e.message);
          }

          // 높이 계산
          const tmp = document.createElement("canvas");
          tmp.width = W * 2;
          tmp.height = 10;
          const tctx = tmp.getContext("2d");
          tctx.scale(2, 2);
          tctx.font = "14px sans-serif";
          const descLines = wrapText(tctx, c.desc, maxTextW);

          const H =
            PAD +
            20 +
            16 + // 타이틀
            (cardImg ? CARD_H + 20 : 0) + // 카드 이미지
            64 + // YES/NO
            32 + // badge
            (includeQ ? 26 : 0) + // 질문
            14 + // 구분선
            descLines.length * 22 + // 해석
            10 +
            24 +
            PAD; // 푸터

          const canvas = document.createElement("canvas");
          canvas.width = W * 2;
          canvas.height = H * 2;
          const ctx = canvas.getContext("2d");
          ctx.scale(2, 2);

          // 배경
          ctx.fillStyle = "#faf8f3";
          ctx.fillRect(0, 0, W, H);

          // 외곽선
          ctx.strokeStyle = "#1a1a1a";
          ctx.lineWidth = 2;
          ctx.strokeRect(8, 8, W - 16, H - 16);

          let y = PAD;

          // 타이틀
          ctx.font = "bold 13px sans-serif";
          ctx.fillStyle = "#999";
          ctx.fillText(getLang() === "en" ? "YES or NO Tarot" : "YES or NO 타로", PAD, y + 13);
          y += 20 + 16;

          // 카드 이미지 (로드 성공한 경우만)
          if (cardImg) {
            const cardX = (W - CARD_W) / 2;
            ctx.save();
            ctx.strokeStyle = "#1a1a1a";
            ctx.lineWidth = 1.5;
            ctx.strokeRect(cardX, y, CARD_W, CARD_H);
            ctx.drawImage(cardImg, cardX, y, CARD_W, CARD_H);
            ctx.restore();
            y += CARD_H + 20;
          }

          // YES / NO
          ctx.font = "bold 52px Georgia, serif";
          ctx.fillStyle = "#1a1a1a";
          ctx.fillText(c.isYes ? "YES." : "NO.", PAD, y + 48);
          y += 64;

          // confidence 뱃지
          ctx.font = "bold 12px sans-serif";
          const bw = ctx.measureText(c.confidence).width + 18;
          ctx.fillStyle = "#f0ece2";
          ctx.fillRect(PAD, y, bw, 22);
          ctx.strokeStyle = "#1a1a1a";
          ctx.lineWidth = 1.5;
          ctx.strokeRect(PAD, y, bw, 22);
          ctx.fillStyle = "#1a1a1a";
          ctx.fillText(c.confidence, PAD + 9, y + 15);
          y += 32;

          // 질문
          if (includeQ && qText) {
            ctx.fillStyle = "#1a1a1a";
            ctx.fillRect(PAD, y + 2, 3, 16);
            ctx.font = "italic 13px sans-serif";
            ctx.fillStyle = "#888";
            ctx.fillText('"' + qText + '"', PAD + 10, y + 14);
            y += 26;
          }

          // 구분선
          ctx.strokeStyle = "#ddd";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(PAD, y);
          ctx.lineTo(W - PAD, y);
          ctx.stroke();
          y += 14;

          // 해석 텍스트
          ctx.font = "14px sans-serif";
          ctx.fillStyle = "#444";
          for (const dl of descLines) {
            ctx.fillText(dl, PAD, y);
            y += 22;
          }
          y += 10;

          // 푸터
          ctx.strokeStyle = "#eee";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(PAD, y);
          ctx.lineTo(W - PAD, y);
          ctx.stroke();
          y += 12;
          ctx.font = "11px sans-serif";
          ctx.fillStyle = "#bbb";
          ctx.fillText(getT().scFooter, PAD, y + 10);

          // 저장 / 공유
          // 저장 / 공유 — 모바일만 Web Share API 사용
          const isMobile = /iPhone|iPad|iPod|Android/i.test(
            navigator.userAgent,
          );
          if (isMobile && navigator.share && navigator.canShare) {
            canvas.toBlob(async (blob) => {
              const file = new File([blob], "tarot-result.png", {
                type: "image/png",
              });
              if (navigator.canShare({ files: [file] })) {
                try {
                  await navigator.share({
                    files: [file],
                    title: getLang() === "en" ? "YES or NO Tarot Result" : "YES or NO 타로 결과",
                  });
                } catch (err) {
                  if (err.name !== "AbortError") fallbackDownload(canvas, c);
                }
                return;
              }
              fallbackDownload(canvas, c);
            }, "image/png");
          } else {
            fallbackDownload(canvas, c);
          }
        } catch (e) {
          console.error("saveImage error:", e);
          showToast(I18N[getLang()].toastFailed);
        }
      }

      function fallbackDownload(canvas, c) {
        console.log("fallbackDownload 진입"); // ← 추가

        const link = document.createElement("a");
        link.download = "tarot-result.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
        showToast(I18N[getLang()].toastSaved);
      }

      // ════════════════════════════════
      // 언어 전환
      // ════════════════════════════════
      function toggleLang() {
        const newLang = getLang() === "ko" ? "en" : "ko";
        setLang(newLang); // applyLang() + renderQuota() 포함
        if (currentCard) {
          const isEn = newLang === "en";
          currentCard.confidence = isEn ? currentCard.confidenceEn : currentCard.confidenceKo;
          currentCard.desc = isEn ? currentCard.descEn : currentCard.descKo;
          document.getElementById("resultBadge").textContent = currentCard.confidence;
          document.getElementById("resultDesc").textContent = currentCard.desc;
          document.getElementById("sc-badge").textContent = currentCard.confidence;
          document.getElementById("sc-desc").textContent = currentCard.desc;
        }
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({ event: "toggle_lang", lang: newLang });
      }

      function showToast(msg) {
        const t = document.getElementById("toast");
        t.textContent = msg;
        t.classList.add("show");
        setTimeout(() => t.classList.remove("show"), 2600);
      }

      // ════════════════════════════════
      // 초기화
      // ════════════════════════════════

      // 시스템 다크모드 감지
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        dark = 1;
        document.getElementById("app").dataset.dark = 1;
        // toggleLabel은 applyLang()에서 처리하므로 여기서 설정 불필요
      }

      // 시스템 설정 변경 시 실시간 반영
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
          dark = e.matches ? 1 : 0;
          document.getElementById("app").dataset.dark = dark;
          document.getElementById("toggleLabel").textContent = getT().darkToggle[dark ? 1 : 0];
          updateDivider();
        });

      updateDivider();
      renderQuota();
      applyLang(); // 언어 + 다크 레이블 모두 여기서 일괄 처리