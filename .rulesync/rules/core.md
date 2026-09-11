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
2. Invoked command workflow (`.cursor/commands/` / `.claude/commands/`; overrides default boundaries for that task)
3. Matching installed skill under `.rulesync/skills/`
4. Nearest `AGENTS.md` for workspace operational context
5. Generated rules for the active tool — always apply; must not be contradicted in AGENTS bodies

## Single source of truth (SSOT)

Each topic has **one owner**. Other files link — they do not restate. If updating would require editing two files, one of them is wrong.

| Topic | Owner |
| ----- | ----- |
| Setup, scripts, verify | [`CONTRIBUTING.md`](../../CONTRIBUTING.md) |
| Workspace map | root [`AGENTS.md`](../../AGENTS.md) |
| Agent behavior (this file) | `.rulesync/rules/core.md` |
| React / Vue / TS / Storybook / env / gitignore | `.rulesync/rules/.curated/` |
| Package component patterns | `.rulesync/rules/integrations/` |
| Commits, UX copy, Turborepo | matching skill under `.rulesync/skills/` |
| Security | [`SECURITY.md`](../../SECURITY.md) |

Edit sources under [`.rulesync/`](../), then `bun run rulesync`. Do not hand-edit generated `.cursor/` / `.claude/` trees.

## Skill scope

Prefer a matching skill over inventing a parallel workflow. Do not paste skill bodies into rules or `AGENTS.md`.

| Task | Skill |
| ---- | ----- |
| Library / stack implementation | Yes — when a matching skill exists |
| New feature or behavior change | When a matching skill exists |
| Config, typo, one-line fix | No |
| Invoked command (`/onboarding`, …) | Command wins |

## Boundaries

- Minimize scope. Use the simplest correct diff. Do not change unrelated code.
- Read surrounding code before writing. Match naming, types, imports, and documentation level.
- Do not over-engineer. Avoid one-off helpers, excessive error handling, or abstractions for unlikely edge cases.
- Comments only for non-obvious business logic or deep technical details.
- Do not add tests unless requested or they cover meaningful behavior.
- Do not create git commits unless explicitly asked.
- Do not push to remote unless explicitly asked.
- Prefer action over preamble; state the outcome or next step without filler or sign-offs.
