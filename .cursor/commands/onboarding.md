# Onboarding

Set up the UI library monorepo.

**Getting started:** install [Bun](https://bun.sh), then `bun install` from the repo root. Dev Containers are optional ([README](../../README.md)).

## Conversation flow

Idempotent — re-run skips completed steps. All steps are **Auto** — no user questions.

## Rules

- [SECURITY.md](../../SECURITY.md)
- [`.cursor/rules/tooling.mdc`](../rules/tooling.mdc)

Never commit, log, or paste full secret values.

## Steps

Execute each section fully before moving to the next.

Do not run `bun install` during onboarding if dependencies are already installed (`node_modules` present). Otherwise run `bun install`.

### 1. Verify — **Auto**

```bash
bunx biome ci
turbo type-check
```

Smoke failures must be explained before marking onboarding complete.

## Checklist

- [ ] No secrets committed or printed in full
- [ ] Smoke verification passed (or failures explained)
