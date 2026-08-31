# Vue Form

Form fields and TanStack Form integration for `@pisagor/vue-form`.

## Commands

```bash
turbo type-check --filter=@pisagor/vue-form
turbo dev --filter=vue-storybook
```

Field stories run in Vue Storybook (`http://127.0.0.1:4002`) under `Forms/Fields/…`. The TanStack integration demo is `Forms/TanStack Form`.

## Layout

- `src/fields/` — standalone fields (`@pisagor/vue-form`)
- `src/tanstack/` — `useAppForm`, connected fields (`@pisagor/vue-form/tanstack`)
- `src/internal/` — package-private helpers

`tanstack/fields/*` skip stories — thin field-context wrappers over `fields/*`.

`@tanstack/vue-form` does not ship `createFormHook`. Equivalent lives in [`src/tanstack/create-form-hook.ts`](./src/tanstack/create-form-hook.ts).

## Conventions

Import light UI from `@pisagor/vue`; heavies from `@pisagor/vue/phone-input` and `@pisagor/vue/rich-text-editor`. Sibling fields: relative paths to the concrete module file. Stories may use package exports — see [Storybook](../../.cursor/rules/integrations/storybook.mdc).
