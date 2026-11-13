# AGENTS.md

## Project
Personal portfolio website for **[YOUR NAME]**, a junior full-stack developer (0-2 years experience).
Primary audience: recruiters and hiring managers who skim for 30-90 seconds.
Primary goal: get hired. A blog / personal-brand layer may be added later, but the core is recruiter-first.
One site only (no separate brand site). The name is shown as a wordmark; no illustrated logo.

## Tech stack
- Next.js (App Router) + TypeScript (strict) + Tailwind CSS
- Deployed on Vercel (auto-deploys from `main`)
- Prefer the standard, documented setup. Do not add dependencies or experimental config flags without asking first and explaining why.

## Site structure
- Homepage (single scroll): Hero -> Selected work -> Experience -> About -> Contact -> Footer
- Exactly one `<h1>` per page (the name in the hero). Every other section title is an `<h2>`.
- One dedicated case study page per featured project: `/projects/[slug]`
- CV downloadable from `/public/cv.pdf`
- Experience: the owner currently has ONE real role. Design the section for a single entry, not a timeline (no sorting logic, no boxes). Show company, role and dates on one line, a one-line description, 2-3 sub-points (each a short heading plus 1-2 sentences covering problem, what I did, technologies) and plain-text tech tags. Keep the data typed in `/content/en/experience.ts` so more roles can be added later without changing the component. Education or milestones may be one short line below, only if useful.
- Never include confidential employer details, client names, internal screenshots, code or invented metrics in Experience. Describe work at the level of problem, role and technologies. Use a number only if it is true and I can explain it in an interview.

## Featured projects
1. **Wedding photo-sharing PWA**: strongest full-stack proof (uploads, storage, PWA/offline)
2. **Facial recognition lock manager**: ML + hardware/security (demo video needed)
3. **Trading bot analyser**: backend/data; frame around engineering, never profit claims

Side mention only (About or a "How I work" blurb): "second brain" (Claude + Obsidian).

## Project presentation
- Homepage: borderless project rows (large screenshot, title, one-liner, tech tags). No cards.
- Each row expands inline (a real `<button>` with `aria-expanded`, one open at a time) to show: problem (1-2 sentences), role, key stack, one concrete highlight, then links: Read case study, Live, GitHub.
- Project data therefore needs a short `summary` block in addition to the full `caseStudy` fields.

## Case study structure (each project)
Problem -> My role -> Stack -> How it works (architecture) -> Challenges and solutions -> What I learned / would improve -> Screenshots or video -> Live + GitHub links.

## Content rules
- ALL text content lives in `/content` as typed data, organised per language (`content/en/...`). Never hardcode copy inside components.
- Build as if French will be added later: no text in components, language in the route (`/en`), layouts that tolerate 15-30% longer text. Do not translate yet; do not show a language switcher until a translation exists.
- Images live in `/public`. Use `next/image`. Prefer WebP, keep each image reasonably small.
- Videos are hosted externally (e.g. YouTube) and embedded or linked, not committed to the repo.
- Never use lorem ipsum, fake stats, fake testimonials or percentage skill bars. Use clearly marked placeholders like `TODO:` during development. Skills are listed as honest groups (Frontend, Backend, Data and ML, Tools).

## Design rules (locked decisions)
- Define colors, fonts, spacing and widths as design tokens (Tailwind theme / CSS variables) in one place, with light and dark values. Light theme first; dark is added in the quality pass.
- Direction: classical, editorial, restrained. Off-white (marble) paper, ink text, one bronze accent. A refined serif for headings, a clean sans for body. Interests (Greek/Roman sculpture, finance, martial arts) are an undertone, not a theme.
- No cards, no divider lines, no boxed tags (this includes the Experience entry). Group content with space and type scale.
- Never: scroll-jacking or horizontal scroll sections, cursor-following effects, loading animations (including text), glass UI, over-the-top "tech" themes (terminal looks, neon, code rain), or anything that looks AI-generated (purple gradients, generic icon feature boxes, three identical cards, filler copy like "passionate about crafting seamless experiences").
- Photo goes in the hero and About, not as a click-to-enter landing. The page scrolls from the first screen.
- Components must not use hardcoded one-off colors or font sizes; use tokens.
- Motion (creative layer only): gentle one-time scroll reveals (about 400-600 ms, content readable immediately), subtle transform-only parallax on project images and the About photo, everything off under `prefers-reduced-motion`. An optional sticky-overlap transition in one place only.

## Quality rules
- Mobile-first and fully responsive.
- Semantic HTML, keyboard navigable (skip link, visible focus), sufficient color contrast, alt text on all images.
- SEO basics: page titles, meta descriptions, Open Graph / social preview image, monogram favicon.
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
Current layer: 2

**Layer 1: Foundation (done)**
Design tokens, global layout, fonts, header/footer, homepage skeleton.

**Layer 1b: Realignment (do first)**
- Replace default grey/Geist tokens with the palette and fonts above; add accent, serif, dark values, container and section-spacing tokens.
- Remove borders and card styling; one `<h1>`; real hero (name, role, one-liner, CTAs, status line, portrait placeholder); skip link; focus styles; reduced-motion rule.
- Replace the Experience timeline component with a simple single-entry layout (see Site structure), placed after Selected work. Restyle the project list as borderless rows; do not build the inline expand yet.
- Restructure content into `content/en/` and add `/en` routing so French can be added later.
- Review `next.config.ts` and `package.json`: use the standard documented Tailwind + Next setup unless an experimental option is justified.

**Layer 2: Core content**
- Typed `Project` data (with `summary` for the inline expand) and a reusable borderless project row component
- Hero, About, Experience, Contact with real content
- CV download link and social links (GitHub, LinkedIn, email)

**Layer 3: Case study pages**
- `/projects/[slug]` pages following the case study structure above
- One project at a time, starting with the wedding photo-sharing PWA

**Layer 4: Quality pass**
Responsive check, accessibility, SEO and social preview image, dark mode, Lighthouse 90+, link check.

**Layer 5: Launch**
Custom domain, `metadataBase`, analytics, final proofreading.

**Layer 6: Creative layer**
Motion and polish per the design rules above. Do not start until layers 1-5 are done.
