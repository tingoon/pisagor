# Recipes Package

Package-local guidance for `tv()` recipe work in `packages/recipes`.

## Layout

```text
src/ui/   one `<name>.ts` per component recipe — exported as `@pisagor/recipes/<name>`
```

Do not author `tv()` recipes in `@pisagor/react` or `@pisagor/vue` — recipes live here only. See [React Component Patterns → Styling](../../.cursor/rules/integrations/react-component.mdc).

## Commands

From the repository root:

```bash
turbo type-check --filter=@pisagor/recipes
```

## Conventions

- Export `{name}Variants` and matching `*VariantProps` / `*Variants` types.
- Use semantic tokens from `@pisagor/tokens` (`z-popover`, `z-modal`, `duration-normal`, `*-foreground`) — avoid raw `z-50`, `text-white`, custom cubic-bezier literals.
- Overlay/modal recipes: `z-modal`; anchored popovers: `z-popover`.
- Empty variant option classes (`""` / `[]`) are allowed when an axis has no extra utilities for that value.

## Internal imports

Within this package, import sibling recipes with relative paths. UI packages import published paths: `@pisagor/recipes/<name>`.
