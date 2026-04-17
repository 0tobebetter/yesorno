      // ════════════════════════════════
      // Supabase 연결
      // ════════════════════════════════
      const SUPABASE_URL = "https://tyjysooaqqmjolcnrtfo.supabase.co";
      const SUPABASE_KEY = "sb_publishable_9nFTcp6xibA9Q2eE6uKChQ_gDwI66_q";

      async function saveToSupabase(data) {
        if (!SUPABASE_URL || !SUPABASE_KEY) return;
        try {
          await fetch(`${SUPABASE_URL}/rest/v1/tarot_readings`, {
            method: "POST",
            headers: {
              apikey: SUPABASE_KEY,
              Authorization: `Bearer ${SUPABASE_KEY}`,
              "Content-Type": "application/json",
              Prefer: "return=minimal",
            },
            body: JSON.stringify(data),
          });
        } catch (e) {
          console.warn("Supabase save failed", e);
        }
      }

      // ════════════════════════════════
      // 다국어
      // ════════════════════════════════
      const I18N = {
        ko: {
          quotaMsg: [
            "오늘 세 번 물어볼 수 있어요",
            "오늘 두 번 물어볼 수 있어요",
            "마지막 질문이에요",
            "공유 보너스! 한 번 더 뽑을 수 있어요",
            "공유 보너스! 마지막 한 번 남았어요",
          ],
          quotaDone: "내일 다시 와주세요 🌙",
          quotaAllUsed: "오늘의 카드를 모두 뽑았어요",
          title: "YES or NO",
          subtitle: "해결! 양자택일타로",
          categoryLabel: "고민 종류 (선택 사항)",
          categories: {
            "": "선택 안 함",
            "연애": "💕 연애",
            "인간관계": "🤝 인간관계",
            "직장·커리어": "💼 직장 · 커리어",
            "공부·시험": "📚 공부 · 시험",
            "돈·재테크": "💰 돈 · 재테크",
            "건강": "🌿 건강",
            "그 외": "✨ 그 외",
          },
          drawBtn: "카드 뽑기 →",
          shareNudgeMain: "친구한테도 공유해보세요!",
          shareNudgeBonus: "공유하면 오늘 한 번 더 뽑을 수 있어요 🎁",
          shareX: "X 공유",
          shareImage: "이미지 저장",
          shareInsta: "인스타",
          shareCopy: "복사",
          shareKakao: "카카오",
          drawAgain: "↺ 다시 뽑기",
          tomorrowBtn: "내일 다시 와주세요 🌙",
          quotaDoneMsg: "오늘의 세 장은 모두 뽑았어요",
          toastGenerating: "이미지 생성 중...",
          toastSaved: "이미지가 저장되었습니다",
          toastFailed: "이미지 저장에 실패했습니다",
          toastCopied: "복사되었습니다",
          toastInstaCopied: "복사됨 — 인스타그램에 붙여넣기 하세요!",
          toastBonus: "🎁 보너스! 한 번 더 뽑을 수 있어요",
          toastKakaoLoading: "카카오 공유를 불러오는 중이에요",
          shareText: (c) => `🔮 YES or NO 타로
결과: ${c.isYes ? "YES" : "NO"} (${c.confidence})
${c.desc}

https://yesorno-tarot.vercel.app/ 
#타로 #양자택일타로 #yesorno`,
          privacyLink: "개인정보처리방침",
          darkToggle: ["🌙 다크", "☀️ 라이트"],
          scFooter: "해결! 양자택일 타로",
          langLabel: "한",
        },
        en: {
          quotaMsg: [
            "Three draws left today",
            "Two draws left today",
            "Last one for today",
            "Bonus draw! One more left",
            "Bonus draw! Last one",
          ],
          quotaDone: "Come back tomorrow 🌙",
          quotaAllUsed: "You've used all your draws for today",
          title: "YES or NO",
          subtitle: "Let the tarot decide",
          categoryLabel: "Topic (optional)",
          categories: {
            "": "No preference",
            "연애": "💕 Romance",
            "인간관계": "🤝 Relationships",
            "직장·커리어": "💼 Career",
            "공부·시험": "📚 Study & Exams",
            "돈·재테크": "💰 Money",
            "건강": "🌿 Health",
            "그 외": "✨ Other",
          },
          drawBtn: "Draw a card →",
          shareNudgeMain: "Share with a friend!",
          shareNudgeBonus: "Share and get one more draw today 🎁",
          shareX: "Share on X",
          shareImage: "Save image",
          shareInsta: "Instagram",
          shareCopy: "Copy",
          shareKakao: "KakaoTalk",
          drawAgain: "↺ Draw again",
          tomorrowBtn: "Come back tomorrow 🌙",
          quotaDoneMsg: "You've used all three draws for today",
          toastGenerating: "Generating image...",
          toastSaved: "Image saved",
          toastFailed: "Failed to save image",
          toastCopied: "Copied!",
          toastInstaCopied: "Copied — paste it into Instagram!",
          toastBonus: "🎁 Bonus! One more draw available",
          toastKakaoLoading: "Loading KakaoTalk share...",
          shareText: (c) => `🔮 YES or NO Tarot
Result: ${c.isYes ? "YES" : "NO"} (${c.confidence})
${c.desc}

https://yesorno-tarot.vercel.app/ 
#tarot #yesorno`,
          privacyLink: "Privacy Policy",
          darkToggle: ["🌙 Dark", "☀️ Light"],
          scFooter: "YES or NO Tarot",
          langLabel: "EN",
        },
      };

      // ════════════════════════════════
      // 언어 상태 — getT()로만 참조, T 상수 제거
      // ════════════════════════════════
      let currentLang = "ko";
      function getLang() { return currentLang; }
      function getT() { return I18N[currentLang]; }

      function setLang(lang) {
        currentLang = lang;
        localStorage.setItem("lang", lang);
        applyLang();
      }

      function applyLang() {
        const t = getT();

        // html lang 속성
        document.documentElement.lang = currentLang;

        // 카테고리 옵션
        const catSelect = document.getElementById("catSelect");
        if (catSelect) {
          Array.from(catSelect.options).forEach(opt => {
            const label = t.categories[opt.value];
            if (label !== undefined) opt.textContent = label;
          });
        }

        // 정적 텍스트 ID 매핑
        const els = {
          "drawBtnText":     t.drawBtn,
          "shareNudgeMain":  t.shareNudgeMain,
          "shareNudgeBonus": t.shareNudgeBonus,
          "privacyLink":     t.privacyLink,
          "fieldLabelCat":   t.categoryLabel,
        };
        Object.entries(els).forEach(([id, text]) => {
          const el = document.getElementById(id);
          if (el) el.textContent = text;
        });

        // 다크모드 토글 레이블 (언어 전환 시에도 현재 모드 기준)
        const toggleLabel = document.getElementById("toggleLabel");
        if (toggleLabel) {
          const isDark = document.getElementById("app")?.dataset.dark === "1";
          toggleLabel.textContent = t.darkToggle[isDark ? 1 : 0];
        }

        // 한/영 슬라이더: 레이블 + active 상태
        const langLabel = document.getElementById("langLabel");
        if (langLabel) langLabel.textContent = t.langLabel;
        const langWrap = document.getElementById("langToggleWrap");
        if (langWrap) langWrap.dataset.active = currentLang === "en" ? "1" : "0";

        // 공유 이미지 푸터
        const scFooter = document.getElementById("sc-footer");
        if (scFooter) scFooter.textContent = `https://yesorno-tarot.vercel.app/ · ${t.scFooter}`;

        // quota UI도 현재 언어로 갱신
        renderQuota();
      }

      // 초기 언어 결정 (localStorage > 브라우저 언어)
      (function initLang() {
        const saved = localStorage.getItem("lang");
        if (saved && I18N[saved]) currentLang = saved;
        else currentLang = (navigator.language || "ko").startsWith("ko") ? "ko" : "en";
      })();

      // ════════════════════════════════
      // 날짜별 3회 제한
      // ════════════════════════════════
      function getTodayKey() {
        const d = new Date();
        return `quota_${d.getFullYear()}_${d.getMonth()}_${d.getDate()}`;
      }
      function getBonusKey() { return getTodayKey() + "_bonus"; }
      function getQuotaUsed() {
        return parseInt(localStorage.getItem(getTodayKey()) || "0", 10);
      }
      function getBonusUsed() {
        return parseInt(localStorage.getItem(getBonusKey()) || "0", 10);
      }
      function getMaxQuota() { return 3 + Math.min(getBonusUsed(), 2); }
      function incrementQuota() {
        localStorage.setItem(getTodayKey(), String(getQuotaUsed() + 1));
      }
      function addBonusQuota() {
        const bonus = getBonusUsed();
        if (bonus >= 2) return false;
        localStorage.setItem(getBonusKey(), String(bonus + 1));
        return true;
      }

      function renderQuota() {
        const t = getT(); // 매번 현재 언어 참조
        const used = getQuotaUsed();
        const remaining = Math.max(0, getMaxQuota() - used);

        const dots = document.getElementById("quotaDots");
        const text = document.getElementById("quotaText");
        if (!dots || !text) return;

        dots.innerHTML = "";
        for (let i = 0; i < 3; i++) {
          const d = document.createElement("div");
          d.className = "quota-dot" + (i < remaining ? "" : " empty");
          dots.appendChild(d);
        }

        if (remaining > 0) {
          const bonus = getBonusUsed();
          const baseRemaining = Math.max(0, 3 - used);
          if (bonus > 0 && baseRemaining <= 0) {
            text.textContent = t.quotaMsg[bonus === 1 ? 3 : 4];
          } else {
            text.textContent = t.quotaMsg[3 - remaining] || t.quotaMsg[0];
          }
        } else {
          text.textContent = t.quotaAllUsed;
        }

        const drawBtn = document.getElementById("drawBtn");
        const quotaDone = document.getElementById("quotaDone");
        if (remaining === 0) {
          if (drawBtn) drawBtn.classList.add("hidden");
          if (quotaDone) {
            quotaDone.classList.remove("hidden");
            quotaDone.innerHTML = `${t.tomorrowBtn}<br><span style="font-size:0.85rem;opacity:0.7">${t.quotaDoneMsg}</span>`;
          }
        } else {
          if (drawBtn) drawBtn.classList.remove("hidden");
          if (quotaDone) quotaDone.classList.add("hidden");
        }

        // 다시 뽑기 버튼
        const againBtn = document.getElementById("againBtn");
        if (againBtn) {
          if (remaining === 0) {
            againBtn.textContent = t.tomorrowBtn;
            againBtn.disabled = true;
            againBtn.style.opacity = ".4";
            againBtn.style.cursor = "not-allowed";
          } else {
            againBtn.textContent = t.drawAgain;
            againBtn.disabled = false;
            againBtn.style.opacity = "1";
            againBtn.style.cursor = "pointer";
          }
        }
      }

      // ════════════════════════════════
      // 다크모드
      // ════════════════════════════════
      let dark = 0;
      function toggleDark() {
        dark = dark ? 0 : 1;
        document.getElementById("app").dataset.dark = dark;
        document.getElementById("toggleLabel").textContent = getT().darkToggle[dark ? 1 : 0];
        updateDivider();
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({ event: "toggle_dark_mode", mode: dark ? "dark" : "light" });
      }
      function updateDivider() {
        const p = document.getElementById("divPath");
        if (p) p.setAttribute("stroke", dark ? "#f0ece2" : "#1a1a1a");
      }

      // ════════════════════════════════
      // 쿠키 동의
      // ════════════════════════════════
      function handleConsent(accepted) {
        localStorage.setItem("cookie_consent", accepted ? "accepted" : "declined");
        document.getElementById("consentBanner").classList.add("hidden");
        gtag("consent", "update", {
          analytics_storage: "granted",
          ad_storage: accepted ? "granted" : "denied",
          ad_user_data: accepted ? "granted" : "denied",
          ad_personalization: accepted ? "granted" : "denied",
        });
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({ event: "cookie_consent", accepted: accepted ? "accepted" : "declined" });
      }

      (function initConsent() {
        const v = localStorage.getItem("cookie_consent");
        if (v) {
          document.getElementById("consentBanner").classList.add("hidden");
          gtag("consent", "update", {
            analytics_storage: "granted",
            ad_storage: v === "accepted" ? "granted" : "denied",
            ad_user_data: v === "accepted" ? "granted" : "denied",
            ad_personalization: v === "accepted" ? "granted" : "denied",
          });
        }
      })();

      // ════════════════════════════════
      // 카드 데이터
      // ════════════════════════════════
      const CAT_MAP = {
        연애: 0,
        인간관계: 1,
        "직장·커리어": 2,
        "공부·시험": 3,
        "돈·재테크": 4,
        건강: 5,
        "그 외": 6,
      };
