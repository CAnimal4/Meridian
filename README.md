# Meridian

Meridian is the AP Human Geography learning app in the Atlas collection. This folder contains the foundation only; content modules are intentionally not installed yet.

## Foundation included

- responsive learning-app shell adapted from the validated Vertex foundation
- Meridian brand, tan/parchment theme, app mark, title, and app switcher
- browser persistence and defensive state migration
- progress analytics and practice-session history surfaces
- feedback modal and Tally handoff surface
- premium/access, moderation, and admin-export API routes copied as foundation plumbing
- first-run, settings, hidden-question, and export/import UI plumbing
- Vercel static/API configuration

## Deliberately excluded

- all Vertex geometry modules, geometry questions, math keyboard, and Canvas PDFs
- Spanish modules, vocabulary, Spanish 1/2 labels, and Claro-specific curriculum
- Meridian AP Human Geography modules; those are the next phase

## Local preview

Serve this folder with a static server. It is dependency-free and does not require a build step. The server routes under `api/` require the Vercel runtime.

## Validation

```sh
node --check app.js
node --check meridian-adapter.js
```

Foundation runtime checks are available through `runAutomatedChecks()` in the browser console after the app loads.

## Deployment

The intended Vercel project is `meridianhistory.vercel.app`. Deployment and server-only environment configuration remain separate from this local foundation work.

No foundation or modules have been started yet.
