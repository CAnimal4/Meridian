# Meridian

Meridian is the AP Human Geography learning app in the Atlas collection. The current local stage includes the Canvas source library and focused practice modules for the collected AP Human Geography materials.

## Foundation included

- responsive learning-app shell adapted from the validated Vertex foundation
- Meridian brand, tan/parchment theme, app mark, title, and app switcher
- browser persistence and defensive state migration
- progress analytics and practice-session history surfaces
- feedback modal and Tally handoff surface
- premium/access, moderation, and admin-export API routes copied as foundation plumbing
- first-run, settings, hidden-question, and export/import UI plumbing
- Vercel static/API configuration
- Canvas AP Human Geography source exports in `assets/canvas-ap-human-geo/`
- twenty-two course-aligned practice modules registered by `meridian-adapter.js`, covering Unit 1 Topics 1.1–1.7 and Unit 2 Topics 2.1–2.12, plus FRQ practice and Test 1 review
- direct source links from module settings to available Canvas lessons, teacher slide decks, Quizlet sets, and local source files
- free/Premium split practice in selected migration topics and a Test 1 review with exactly half of its questions Premium-gated
- public Library entries for the seventeen collected PDF resources, including the newly added 2.3, 2.7, and 2.10–2.12 teacher decks

## Scope boundaries

- all Vertex geometry modules, geometry questions, math keyboard, and Geometry PDFs
- Claro-specific language curriculum
- Canvas activities that are assignments, quizzes, or external services rather than downloadable documents or slide decks

## Local preview

Serve this folder with a static server. It is dependency-free and does not require a build step. The server routes under `api/` require the Vercel runtime.

## Validation

```sh
node --check app.js
node --check meridian-adapter.js
```

Runtime checks are available through `runAutomatedChecks()` in the browser console after the app loads.

## Deployment

The intended Vercel project is `meridianhistory.vercel.app`. Deployment and server-only environment configuration remain separate from this local work.

## Current course coverage

The AP Human Geo Canvas Modules page and Study Support page were reviewed on 2026-10-03. The course was through Unit 2 Topic 2.12; the combined Unit 1/Unit 2 Test was listed for October 7. New coverage fills the earlier 1.6 and 2.3 gaps, adds 2.7–2.12, and places the cumulative review last in the Reference and FRQ group.

Teacher slide decks for 2.7, 2.10, 2.11, and 2.12 were opened read-only and informed the questions. Both Anderson Summer Work Quizlet sets for Units 1 and 2 were reviewed from the open pages and copied into separate typing vocabulary modules. Their source links remain in Meridian. Course topic titles, quizzes, and Edpuzzle labels from Canvas inform the remaining source-linked practice.


The Canvas source folder also includes PDF exports for the 2.3 Population Composition/Pyramids, 2.7 Population Policies, 2.10 Causes of Migration, 2.11 Forced and Voluntary Migration, and 2.12 Effects of Migration teacher slide decks. Each appears in the public Library and as a local source link in its related module.
