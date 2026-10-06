# Hussain Alqassab — Portfolio & Journal

An editorial-style personal website combining Hussain's professional background, selected projects and project-based field notes.

**Website:** https://hwq12331.github.io/  
**Source:** https://github.com/hwq12331/hwq12331.github.io

## What's included

- A personal introduction and professional portrait.
- KFUPM MIS education, graduation date, languages and selected coursework.
- Al Manaseeb Contracting Company experience, with AMC Project Hub presented as company work.
- Featured Stock Rating System and Sallehni projects, plus four additional projects.
- Technology and business-analysis skills, GitHub/LinkedIn links, email and phone contact.
- A downloadable PDF CV.
- Three full journal articles with individual URLs, table of contents, related notes and share-link controls.
- Journal search and topic filtering, RSS, sitemap, social-preview metadata and a custom 404 page.
- Responsive desktop/mobile layouts, a persistent dark/light theme, keyboard navigation and reduced-motion support.

The blog articles are based on the reviewed project implementation and CV. They distinguish sample-data demos, prototype functionality and financial-research scope from production or performance claims.

## Run locally

Node.js **22.12 or newer** is required.

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro, normally `http://localhost:4321`.

```sh
npm run check
npm run build
npm run preview
```

## Edit the content

| Content | File |
| --- | --- |
| Contact details, education, skills, project links | `src/data/profile.ts` |
| Home page and experience/project descriptions | `src/pages/index.astro` |
| Blog posts | `src/content/journal/*.md` |
| Blog frontmatter schema | `src/content.config.ts` |
| Visual design and responsive styles | `src/styles/global.css` |
| Theme, menu, search and copy interactions | `src/scripts/site.ts` |
| Portrait and project screenshots | `public/images/` |
| Downloadable CV | `public/resume/Hussain_Alqassab_CV.pdf` |

To add a post, create a Markdown file in `src/content/journal/`:

```yaml
---
title: "Your article title"
description: "A short summary of the article."
category: "Data & ML"
published: 2026-10-06
order: 4
cover: "analytics"
draft: false
---
```

Supported categories: `Digital transformation`, `Data & ML`, `Interfaces & UX`.

Supported cover illustrations: `workflow`, `analytics`, `interface`. A post with `draft: true` is excluded from the production site and RSS feed.

## Deployment

This is a fully static Astro site. `npm run build` generates the publishable files in `dist/`.

The GitHub Pages deployment uses the `gh-pages` branch at `/`. The source code stays on `main`. `public/.nojekyll` ensures that Astro's `_astro` asset directory is served correctly.

When updating the site, build it and publish the new `dist/` output to the Pages branch. Commit the edited source to `main` separately. The website does not require backend credentials or a database.

## Project demos

- AMC Project Hub: https://hwq12331.github.io/AMC-Project-Hub-Portfolio/
- Sallehni: https://hwq12331.github.io/Sallehni/

## Content notes

- AMC Project Hub was developed for Al Manaseeb Contracting Company. Its public demo uses sample data.
- Sallehni is a frontend prototype with simulated diagnostics and service records.
- The Stock Rating System's acquisition-universe and dataset figures describe research scope. Its public repository documents an earlier modular analyzer than the reviewed local research implementation.
- Independent-project dates and unverified impact figures have not been invented.
