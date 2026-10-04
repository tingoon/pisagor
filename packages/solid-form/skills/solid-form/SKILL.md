---
name: solid-form
description: >-
  Pisagor `@pisagor/solid-form` — labeled field compositions and TanStack Form bindings for Solid.
  Use when building forms with TextField, SelectField, CheckboxField, etc., or integrating
  @tanstack/solid-form. Ships inside the npm package for Intent. Prefer MCP (`bunx @pisagor/mcp`)
  when available; use this skill for form-field APIs.
compatibility: >-
  Requires Solid 1, Tailwind v4, @pisagor/solid. Optional: @tanstack/solid-form for ./tanstack.
---

# @pisagor/solid-form

Labeled field helpers on top of `@pisagor/solid`.

**Recommended:** `bunx @pisagor/mcp`.

## Layout

```
skills/solid-form/
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
Routes: `/solid/forms/<id>/develop` and `/design`. Legacy `/usage` and `/examples` redirect to develop.

Flat `references/primitives/<id>.md` is legacy (single file with YAML + body); the docs app still maps it into tabs.

The field id is the folder name (or the legacy filename without `.md`).

Example sources live under `assets/examples/<id>/` (also available via MCP `get_example`).

## Install

```bash
bun add @pisagor/solid @pisagor/solid-form
# optional — required only for ./tanstack
bun add @tanstack/solid-form
```

## Imports

Standalone fields:

```ts
import { TextField, SelectField } from "@pisagor/solid-form";
```

TanStack Form (`./tanstack` does **not** re-export field components — use `useAppForm` + `form.AppField`).
`useAppForm` takes an options **accessor** (Solid convention):

```tsx
import { useAppForm } from "@pisagor/solid-form/tanstack";

const form = useAppForm(() => ({
  defaultValues: { email: "" },
  onSubmit: async () => {},
}));

<form.AppField name="email">
  {(field) => <field.TextField label="Email" />}
</form.AppField>
```

## Fields

`AutocompleteField`, `CheckboxField`, `DateField`, `FileField`, `NumberField`, `OtpField`, `PasswordField`, `PhoneField`, `RadioGroupField`, `RichTextEditorField`, `SelectField`, `SliderField`, `SwitchField`, `TagsInputField`, `TextField`, `TextareaField`.

## Rules

- Prefer these fields for labeled controls; compose `Field` from `@pisagor/solid` only for custom layouts.
- Class prop: `class` (not `className`).
- Examples: MCP `get_example` / `list_examples`.

## Source

| Resource | Path |
| -------- | ---- |
| Fields | `@pisagor/solid-form` → `src/fields/` |
| TanStack | `@pisagor/solid-form/tanstack` → `src/tanstack/` (`useAppForm`, hooks; fields via `field.TextField`) |

Examples ship at `assets/examples/<field>/` (and `assets/examples/tanstack/`). This skill does not own `@pisagor/solid` primitives — compose `Field` from that package only for custom layouts.
