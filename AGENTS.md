# AGENTS.md

## Project
Personal portfolio website for **[YOUR NAME / HANDLE]**, a junior full-stack developer (0-2 years experience).
Primary audience: recruiters and hiring managers who skim for 30-90 seconds.
Primary goal: get hired. A blog / personal-brand layer may be added later, but the core is recruiter-first.
One site only (no separate brand site).

## Tech stack
- Next.js (App Router) + TypeScript (strict) + Tailwind CSS
- Deployed on Vercel (auto-deploys from `main`)
- Do not add dependencies without asking first and explaining why.

## Site structure
- Homepage (single scroll): Hero -> Featured projects (cards) -> Experience -> About -> Contact -> Footer
- One dedicated case study page per featured project: `/projects/[slug]`
- CV downloadable from `/public/cv.pdf`

## Featured projects
1. **Wedding photo-sharing PWA**: strongest full-stack proof (uploads, storage, PWA/offline)
2. **Facial recognition lock manager**: ML + hardware/security (demo video needed)
3. **Trading bot analyser**: backend/data; frame around engineering, never profit claims

Side mention only (About or a "How I work" blurb): "second brain" (Claude + Obsidian).

## Case study structure (each project)
Problem -> My role -> Stack -> How it works (architecture) -> Challenges and solutions -> What I learned / would improve -> Screenshots or video -> Live + GitHub links.

## Content rules
- ALL text content lives in `/content` (a typed `projects.ts` data file or MDX files). Never hardcode copy inside components.
- Images live in `/public`. Use `next/image`. Prefer WebP, keep each image reasonably small.
- Videos are hosted externally (e.g. YouTube) and embedded or linked, not committed to the repo.
- Never use lorem ipsum in final content. Use clearly marked placeholders like `TODO:` during development.

## Design rules
- Define colors, fonts, spacing, and radii as design tokens (Tailwind theme / CSS variables) in one place.
- Components must not use hardcoded one-off colors or font sizes; use tokens.
- Keep the design simple and clean until the creative layer. Do not add heavy animations, effects, or decorative libraries until asked.

## Quality rules
- Mobile-first and fully responsive.
- Semantic HTML, keyboard navigable, sufficient color contrast, alt text on all images.
- SEO basics: page titles, meta descriptions, Open Graph / social preview image.
- Aim for Lighthouse 90+ on performance, accessibility, best practices, SEO.
- No broken links. No console errors.

## Code rules
- Small, readable, reusable components in `/components`.
- Strong typing; avoid `any`.
- Secrets only in `.env.local` (git-ignored). Never hardcode keys.

## Workflow rules
- Work in small steps. One task at a time, within the current layer only.
- For anything non-trivial, propose a short plan first and STOP. Wait for my approval before writing code.
- Only change files relevant to the task. Do not refactor unrelated code.
- Do not start work from a later layer, even if it seems helpful.
- Before finishing a task, run `npm run lint` and `npm run build`, and fix errors.
- End each task with a short summary: what changed, which files, and anything I should check manually.
- The owner must be able to explain every part of this code in an interview, so prefer clear and conventional solutions over clever ones.

## Build order
Current layer: 2 (update this line as we progress)

**Layer 1: Foundation (done)**
Design tokens, global layout, fonts, header/footer, homepage skeleton.

**Layer 2: Core content**
- Typed `Project` data in `/content/projects.ts` and a reusable `ProjectCard` component
- Hero, About, Contact sections with real content
- CV download link (`/public/cv.pdf`) and social links (GitHub, LinkedIn, email)
- Typed `Experience` data in `/content/experience.ts` and an Experience timeline section
  (role, company, dates, short description, 3-4 accomplishment bullets, tech tags)

**Layer 3: Case study pages**
- `/projects/[slug]` pages following the case study structure above
- One project at a time, starting with the wedding photo-sharing PWA

**Layer 4: Quality pass**
Responsive check, accessibility, SEO and social preview image, Lighthouse 90+, link check.

**Layer 5: Launch**
Custom domain, `metadataBase`, analytics, final proofreading.

**Layer 6: Creative layer**
Unique visual identity, motion, personality. Do not start until layers 1-5 are done.
Inspiration notes will live in `docs/inspiration.md`.
