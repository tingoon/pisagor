---
root: true
targets:
  - '*'
description: Core agent boundaries for the repository
globs:
  - '**/*'
cursor:
  alwaysApply: true
  globs: []
---
# Core Boundaries

## Instruction priority

1. User chat instructions
2. Invoked [`.cursor/commands/`](../commands/) workflow (overrides default boundaries for that task)
3. Nearest `AGENTS.md` for workspace operational context
4. [`.cursor/rules/`](.) — always apply; must not be contradicted in AGENTS bodies

## Directory layout

Canonical agent sources live under [`.agents/`](../../). Cursor consumes generated files under [`.cursor/`](../../.cursor/). Regenerate with `bun run rulesync` (or `bun run setup`).

```text
.agents/                         # Source (edit here)
├── rules/                       # Policies (`.md` → Cursor `.mdc`)
│   ├── core.md                  # Instruction priority, folder map, SSOT
│   ├── tooling.md               # Monorepo ops, lint, hooks, CI, commits
│   ├── styleguides/             # How code is written / read
│   └── integrations/            # How this repo wires the stack
├── commands/                    # Slash / invoked workflows
└── mcp.jsonc                    # MCP servers (secrets via ${env:…})

.cursor/                         # Generated for Cursor — do not hand-edit rules/commands
├── rules/*.mdc
└── commands/
```

Rule bodies are authored in [`.agents/rules/`](../../.agents/rules/) as `.md` files. Config: [`rulesync.jsonc`](../../rulesync.jsonc).

### Single source of truth (SSOT)

Each topic has **one owner** file under `.agents/`. Other files do not restate the rule — they link. If updating a rule would require editing two files, one of them is wrong. Do not edit generated `.cursor/rules/` or `.cursor/commands/` copies.

### Styleguides

| File | Topic |
| ---- | ----- |
| [TypeScript](styleguides/typescript.mdc) | TypeScript, TSDoc |
| [React](styleguides/react.mdc) | React component style |
| [Vue](styleguides/vue.mdc) | Vue component style |
| [AGENTS.md](styleguides/agents.mdc) | `AGENTS.md` authoring |

### Integrations

| File | Topic |
| ---- | ----- |
| [React Component Patterns](integrations/react-component.mdc) | Shared component package (`@pisagor/react`) |
| [Vue Component Patterns](integrations/vue-component.mdc) | Shared component package (`@pisagor/vue`) |
| [Component](integrations/component.mdc) | Product naming (nav, toolbar, select, overlay, feedback, i18n) |
| [Storybook](integrations/storybook.mdc) | Stories; runners in `apps/react` and `apps/vue` |

## Boundaries

- Minimize scope. Use the simplest correct diff. Do not change unrelated code.
- Read surrounding code before writing. Match naming, types, imports, and documentation level.
- Do not over-engineer. Avoid one-off helpers, excessive error handling, or abstractions for unlikely edge cases.
- Comments only for non-obvious business logic or deep technical details.
- Do not add tests unless requested or they cover meaningful behavior.
- Do not create git commits unless explicitly asked.
- Do not push to remote unless explicitly asked.
- Prefer action over preamble; state the outcome or next step without filler or sign-offs.
- Security: [SECURITY.md](../../.github/SECURITY.md).
