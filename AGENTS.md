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
- Homepage (single scroll): Hero -> Featured projects (cards) -> About -> Contact -> Footer
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
- Keep the design simple and clean for now. The bold / creative visual layer comes LAST. Do not add heavy animations, effects, or decorative libraries until asked.

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
- Work in small steps. One layer / task at a time.
- For anything non-trivial, propose a short plan first and wait for approval.
- Only change files relevant to the task. Do not refactor unrelated code.
- Before finishing a task, run `npm run lint` and `npm run build`, and fix errors.
- End each task with a short summary: what changed, which files, and anything I should check manually.
- The owner must be able to explain every part of this code in an interview, so prefer clear and conventional solutions over clever ones.

## Build order (current layer: 1)
1. Foundation: tokens, global layout, fonts, header/footer
2. Core content: Hero, About, Projects cards, Contact, CV link
3. Case study pages (one per project)
4. Quality pass: responsive, a11y, SEO, performance, link check
5. Launch: custom domain, analytics, proofreading
6. Creative layer: unique design, motion, personality