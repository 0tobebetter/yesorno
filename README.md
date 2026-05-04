# 해결! 양자택일 타로 🔮

A YES/NO tarot web app for Korean-speaking users — built as a full-stack solo project with a focus on production-quality analytics, consent compliance, and SEO.

🔗 **Live:** [yesorno-zeta.vercel.app](https://yesorno-zeta.vercel.app)

---

## What This Project Is

A tarot card draw experience where users ask a question and receive a YES or NO reading from the 22 Major Arcana. Each card carries category-specific interpretations rather than a single fixed answer — so the same card reads differently depending on whether the question is about love, career, or daily life.

The app enforces a daily 3-draw limit per user (via Supabase), keeps a draw history, and supports dark/light mode. Users can save their reading as an image to share.

The analytics and compliance setup is production-grade — not an afterthought.

---

## Tech Stack

| Layer | Detail |
|---|---|
| Frontend | Vanilla HTML / CSS / JavaScript |
| Backend / DB | Supabase (PostgreSQL) — daily draw limits, history |
| Tag Management | Google Tag Manager (`GTM-NKX5RSN2`) |
| Analytics | GA4 (`G-PJWKN06TZG`) |
| Consent | Google Consent Mode v2 with cookie banner |
| Deployment | Vercel |
| SEO | `robots.txt`, `sitemap.xml`, OG image, Search Console |

---

## Features

- **22 Major Arcana** — all cards implemented as SVG with original styling
- **Category-based interpretations** — love / career / daily life readings per card
- **Daily 3-draw limit** — enforced via Supabase, resets at midnight
- **Draw history** — stored per session
- **Image save & share** — canvas-rendered result card for social sharing
- **Dark / light mode**
- **Privacy page** — GDPR-aligned, linked from cookie banner
- **Blog section** — supporting SEO with tarot-related content articles

---

## Analytics Implementation

The consent and tracking setup follows real production standards:

- Consent Mode v2: analytics and ad_storage signals fire conditionally based on user choice
- GTM container manages all tag firing — no hardcoded scripts outside GTM
- GA4 events track: card drawn, category selected, result viewed, image saved
- Modelled conversions active for non-consenting users (GA4 behavioural modelling)

---

## File Structure

```
/
├── index.html        # Main app
├── app.js            # Core logic — draw engine, Supabase calls, UI state
├── cards.js          # All 22 Major Arcana — SVG paths + interpretations
├── config.js         # Supabase config, constants
├── style.css         # Theme variables, dark/light mode, layout
├── privacy.html      # Privacy policy
├── og-image.html/png # Social share preview
├── robots.txt
├── sitemap.xml
└── blog/             # SEO content articles
```

---

## What I Built and Why

This project came directly after the overseas-quiz experiment. The quiz showed that Korean-language content could generate organic traffic without promotion — so I wanted to test whether a more interactive, repeatable-use tool would retain users better (return visits via draw limit reset).

It also served as a deeper dive into Supabase — moving from pure client-side state to a real backend with row-level data and server-enforced limits.

---

*Part of a broader portfolio of analytics and automation work. See [data-sj.vercel.app](https://data-sj.vercel.app)*
