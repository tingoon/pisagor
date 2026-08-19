# Vue Components

Package-local guidance for `packages/vue` (`@pisagor/vue`). Uses `@pisagor/styles` recipes and `@pisagor/tokens` via `./styles`.

## Current surface

- `@pisagor/vue/accordion` — compound + shorthand Accordion
- `@pisagor/vue/field` — compound Field (label, description, error, …)
- `@pisagor/vue/input` — Input with optional clear button
- `@pisagor/vue/input-group` — compound InputGroup (addon, button, input, textarea)
- `@pisagor/vue/textarea` — Textarea with optional clear button
- `@pisagor/vue/password-input` — PasswordInput with visibility toggle
- `@pisagor/vue/number-input` — compound NumberInput
- `@pisagor/vue/radio-group` — compound + shorthand RadioGroup
- `@pisagor/vue/styles` — Tailwind entry (tokens + `@source` for vue sources + styles recipes)

## Internal imports

Within this package, import sibling components with relative paths. Apps use `@pisagor/vue/<name>`.
