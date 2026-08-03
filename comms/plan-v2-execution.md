# Refurbish V2 — Execution Plan

## Context
Portfolio needs two things: (1) technical polish (stale defaults from Vite scaffold), and (2) AutoScapes as a featured 3rd project with a dedicated case study page. Pete and Mike have approved redacted images + high-level problem discussion. Stack correction: no AWS — it's Supabase + Vercel.

---

## Part 1: Technical Polish

**Files:** `index.html`

- [ ] Title: `"Suraj Gopal | Full-Stack Developer"` (or your preferred title — let me know)
- [ ] Meta description: `"Portfolio of Suraj Gopal — full-stack developer building data platforms, web apps, and APIs with React, TypeScript, NestJS, and PostgreSQL."`
- [ ] Favicon: generate a simple `SG` monogram SVG, replace `vite.svg`
- [ ] Remove console.log debug statements in `WorkCard.tsx` (lines 21, 40)
- [ ] Fix "Live Demo (Coming Soon)" links — if demo_site is empty, don't render a dead link

---

## Part 2: AutoScapes — Featured Card + Case Study Page

### 2a. Add React Router

**Install:** `react-router-dom`

**Routing structure:**
- `/` → current scroll page (Hero, Experience, Projects)
- `/projects/autoscapes` → AutoScapes case study page

**Files to modify:**
- `src/main.tsx` — wrap app in `BrowserRouter`
- `src/App.tsx` — wrap content in `Routes`, add route for case study page

### 2b. Featured Project Card

**New file:** `src/FeaturedCard.tsx`

A full-width card rendered above the 2-card grid in `PortfolioMain.tsx`. Visually distinct:
- Spans full width of the container
- Subtle "Featured Project" label or accent border
- Left side: project info + tech tags + "View Case Study →" CTA
- Right side: redacted screenshot placeholder (you'll drop in the actual image later)
- Clicking navigates to `/projects/autoscapes`

**Modify:** `src/PortfolioMain.tsx` — render `FeaturedCard` above the existing `motion.div` grid.

### 2c. AutoScapes Case Study Page

**New file:** `src/AutoScapesCaseStudy.tsx`

Structured sections with Framer Motion entrance animations, matching the site's dark theme:

1. **Header** — title, one-line tagline, tech stack pills
2. **Problem** — automotive research consultancy running on spreadsheets needed a real data platform
3. **Architecture** — NestJS backend, Next.js frontend, PostgreSQL via Supabase, Supabase Auth, deployed on Vercel. Brief rationale for each choice.
4. **Key Features** (the differentiators you called out):
   - **Analytics dashboard** — data completeness indicators, visual markers for company size, market cap, etc. Designed for quick visual ingestion of market data at a glance.
   - **Taxonomy & tag search** — clickable taxonomy tags + fuzzy search. Enables endless recombination to slice players in the industry into arbitrary subgroupings.
   - **RBAC & onboarding** — Supabase Auth with invite flow, viewer/admin roles
   - **Data flow** — ETL pipeline, CSV import/export for reconciliation
5. **Engineering spotlight** — the logo caching proxy story (small, concrete, shows problem-solving)
6. **Outcome** — onboarding first paying subscribers via VC-led beta, positioned to replace legacy spreadsheets

Each section gets a placeholder for a redacted screenshot where appropriate (you can drop images in later).

### 2d. Data changes

**Modify:** `src/portfolio_details/repo-details.json` — no change needed for AutoScapes since it's handled by the dedicated `FeaturedCard` component, not the generic card loop. AutoScapes data lives in its own component/page.

### 2e. Navigation back

- Case study page gets a "← Back to Portfolio" link at top that navigates to `/#projects`
- TopNav stays visible on the case study page

---

## Part 3: Stale content check

- [ ] Verify GitHub links for Vehicle Dashboard and Talktor are live
- [ ] Check that demo GIFs load correctly
- [ ] Ensure Experience section content matches current resume framing

---

## Verification

1. `npm run dev` — confirm home page loads, scroll nav works
2. Click AutoScapes featured card → navigates to case study page
3. Case study page renders all sections, back link returns to projects
4. Check page title and meta in browser tab / dev tools
5. Favicon shows the new monogram instead of Vite logo

---

## Open questions for you

1. Page title — is `"Suraj Gopal | Full-Stack Developer"` the right framing?
2. Do you have redacted screenshots ready to drop in, or should I just leave clean placeholders for now?
3. The logo caching proxy story — can you give me 2-3 sentences on the problem/solution so I can write it up properly? Or do you want to draft that section yourself?
