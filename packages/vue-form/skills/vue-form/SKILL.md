---
name: vue-form
description: >-
  Pisagor `@pisagor/vue-form` — labeled field compositions and TanStack Form bindings for Vue.
  Use when building forms with TextField, SelectField, CheckboxField, etc., or integrating
  @tanstack/vue-form. Ships inside the npm package for Intent. Prefer MCP (`bunx @pisagor/mcp`)
  when available; use this skill for form-field APIs.
compatibility: >-
  Requires Vue 3.5+, Tailwind v4, @pisagor/vue. Optional: @tanstack/vue-form for ./tanstack.
---

# @pisagor/vue-form

Labeled field helpers on top of `@pisagor/vue`.

**Recommended:** `bunx @pisagor/mcp`.

## Layout

```
skills/vue-form/
  SKILL.md
  references/          # primitives/
  assets/examples/     # <field>/*
```

### Primitive docs

Prefer the **folder** form (tabs on the docs site):

```
references/primitives/<id>/
  metadata.md    # YAML frontmatter only
  design.md      # When to use (Prefer / Avoid)
  develop.md     # Import, Anatomy, ## Examples (:::example), a11y notes
```

Docs tabs: **Develop** (default) → **Design**.
Routes: `/vue/forms/<id>/develop` and `/design`. Legacy `/usage` and `/examples` redirect to develop.
`/vue/forms/<id>` redirects to the default tab.

Flat `references/primitives/<id>.md` is legacy (single file with YAML + body); the docs app still maps it into tabs.

The field id is the folder name (or the legacy filename without `.md`).

Example sources live under `assets/examples/<id>/` (also available via MCP `get_example`).

## Install

```bash
bun add @pisagor/vue @pisagor/vue-form
# optional — required only for ./tanstack
bun add @tanstack/vue-form
```

## Imports

Standalone fields:

```ts
import { TextField, SelectField } from "@pisagor/vue-form";
```

TanStack Form (`./tanstack` does **not** re-export field components — use `useAppForm` + `form.AppField`):

```ts
import { useAppForm } from "@pisagor/vue-form/tanstack";

const form = useAppForm({ defaultValues: { email: "" }, onSubmit: async () => {} });
// field.TextField via form.AppField
```

## Fields

`AutocompleteField`, `CheckboxField`, `DateField`, `FileField`, `NumberField`, `OtpField`, `PasswordField`, `PhoneField`, `RadioGroupField`, `RichTextEditorField`, `SelectField`, `SliderField`, `SwitchField`, `TagsInputField`, `TextField`, `TextareaField`.

## Rules

- Prefer these fields for labeled controls; compose `Field` from `@pisagor/vue` only for custom layouts.
- Class prop: `class`.
- Examples: MCP `get_example` / `list_examples`.

## Source

| Resource | Path |
| -------- | ---- |
| Fields | `@pisagor/vue-form` → `src/fields/` |
| TanStack | `@pisagor/vue-form/tanstack` → `src/tanstack/` (`useAppForm`, hooks; fields via `field.TextField`) |

Examples ship at `assets/examples/<field>/` (and `assets/examples/tanstack/`). This skill does not own `@pisagor/vue` primitives — compose `Field` from that package only for custom layouts.
