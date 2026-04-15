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
      // 다국어 (현재 ko만 — en/ja는 키만 추가)
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
        },
      };
      const T = I18N.ko;

      // ════════════════════════════════
      // 날짜별 3회 제한 (자정 기준)
      // ════════════════════════════════
      function getTodayKey() {
        const d = new Date();
        return `quota_${d.getFullYear()}_${d.getMonth()}_${d.getDate()}`;
      }
      function getBonusKey() {
        return getTodayKey() + "_bonus";
      }
      function getQuotaUsed() {
        return parseInt(localStorage.getItem(getTodayKey()) || "0", 10);
      }
      function getBonusUsed() {
        return parseInt(localStorage.getItem(getBonusKey()) || "0", 10);
      }
      function getMaxQuota() {
        return 3 + Math.min(getBonusUsed(), 2); // 기본 3 + 보너스 최대 2
      }
      function incrementQuota() {
        const k = getTodayKey();
        const newCount = getQuotaUsed() + 1;
        localStorage.setItem(k, String(newCount));
        // 뽑기 시각 기록 (간격 분석용)
        const times = JSON.parse(localStorage.getItem(k + "_times") || "[]");
        times.push(Date.now());
        localStorage.setItem(k + "_times", JSON.stringify(times));
      }
      function getDrawTimes() {
        const k = getTodayKey();
        return JSON.parse(localStorage.getItem(k + "_times") || "[]");
      }
      function addBonusQuota() {
        const bonus = getBonusUsed();
        if (bonus >= 2) return false; // 하루 최대 +2
        localStorage.setItem(getBonusKey(), String(bonus + 1));
        return true;
      }
      function renderQuota() {
        const used = getQuotaUsed();
        const remaining = Math.max(0, getMaxQuota() - used);
        const dots = document.getElementById("quotaDots");
        const text = document.getElementById("quotaText");
        dots.innerHTML = "";
        for (let i = 0; i < 3; i++) {
          const d = document.createElement("div");
          d.className = "quota-dot" + (i < remaining ? "" : " empty");
          dots.appendChild(d);
        }
        if (remaining > 0) {
          const bonus = getBonusUsed();
          const baseRemaining = Math.max(0, 3 - getQuotaUsed());
          if (bonus > 0 && baseRemaining <= 0) {
            // 보너스 뽑기 중
            text.textContent = T.quotaMsg[bonus === 1 ? 3 : 4];
          } else {
            text.textContent = T.quotaMsg[3 - remaining] || T.quotaMsg[0];
          }
        } else {
          text.textContent = "오늘의 카드를 모두 뽑았어요";
        }
        // 폼 / 버튼 제어
        const drawBtn = document.getElementById("drawBtn");
        const quotaDone = document.getElementById("quotaDone");
        if (remaining === 0) {
          drawBtn.classList.add("hidden");
          quotaDone.classList.remove("hidden");
        } else {
          drawBtn.classList.remove("hidden");
          quotaDone.classList.add("hidden");
        }
        // 다시 뽑기 버튼
        const againBtn = document.getElementById("againBtn");
        if (againBtn) {
          if (remaining === 0) {
            againBtn.textContent = "내일 다시 와주세요 🌙";
            againBtn.disabled = true;
            againBtn.style.opacity = ".4";
            againBtn.style.cursor = "not-allowed";
          } else {
            againBtn.textContent = "↺ 다시 뽑기";
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
        document.getElementById("toggleLabel").textContent = dark
          ? "☀️ 라이트"
          : "🌙 다크";
        updateDivider();
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          event: "toggle_dark_mode",
          mode: dark ? "dark" : "light",
        });
      }
      function updateDivider() {
        const p = document.getElementById("divPath");
        if (p) p.setAttribute("stroke", dark ? "#f0ece2" : "#1a1a1a");
      }

      // ════════════════════════════════
      // 쿠키 동의
      // ════════════════════════════════
      function handleConsent(accepted) {
        localStorage.setItem(
          "cookie_consent",
          accepted ? "accepted" : "declined",
        );
        document.getElementById("consentBanner").classList.add("hidden");

        // Consent Mode v2 업데이트
        gtag("consent", "update", {
          analytics_storage: "granted",
          ad_storage: accepted ? "granted" : "denied",
          ad_user_data: accepted ? "granted" : "denied",
          ad_personalization: accepted ? "granted" : "denied",
        });

        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          event: "cookie_consent",
          accepted: accepted ? "accepted" : "declined",
        });
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