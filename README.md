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
- nine source-linked practice modules registered by `meridian-adapter.js`
- public Library entries for the ten collected PDF review files

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
