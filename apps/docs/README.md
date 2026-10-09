# Pisagor Docs

Astro documentation site for Pisagor UI. Each framework has its own URL tree (`/react`, `/vue`, `/astro`, `/solid`, `/svelte`) with framework-local copy and demos.

## Develop

```bash
# from repo root
bun run docs

# or
bun --filter docs dev
```

- Local: http://127.0.0.1:4000
- React: `/react`
- Vue: `/vue`
- Astro: `/astro`
- Solid: `/solid`
- Svelte: `/svelte`

## Scripts

| Script | Description |
| --- | --- |
| `dev` | Dev server on port 4000 |
| `build` | Static production build |
| `preview` | Preview the production build |
| `type-check` | TypeScript check |

## Structure

Follows [Astro project structure](https://docs.astro.build/en/basics/project-structure/):

```text
apps/docs/
├── public/                 # static assets (favicon, robots.txt)
├── src/
│   ├── components/
│   │   ├── base-head.astro  # document head
│   │   ├── header.astro    # site header chrome
│   │   └── docs/           # docs UI (sidebar, preview, props table, …)
│   ├── layouts/
│   │   └── docs-layout.astro
│   ├── content/            # per-framework docs (components / forms)
│   │   ├── react/{components,forms}/<id>/{metadata,design,develop}.md
│   │   ├── solid/...
│   │   ├── vue/...
│   │   ├── svelte/...
│   │   └── astro/components/...   # static subset; no forms
│   ├── lib/                # nav, packages, props helpers
│   ├── pages/              # routes only (required by Astro)
│   │   ├── react/{components,forms,blocks}/
│   │   ├── vue/...
│   │   ├── solid/...
│   │   ├── svelte/...
│   │   └── astro/...
│   ├── styles/
│   │   └── global.css
│   └── snippets/           # optional page-local source samples
├── astro.config.ts
├── package.json
└── tsconfig.json
```

Component examples for demos live in `packages/{react,vue,astro,solid,svelte,*-form}/examples` (not under `src/pages`).
