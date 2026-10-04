---
name: react-form
description: >-
  Pisagor `@pisagor/react-form` — labeled field compositions and TanStack Form bindings for React.
  Use when building forms with TextField, SelectField, CheckboxField, etc., or integrating
  @tanstack/react-form. Ships inside the npm package for Intent. Prefer MCP (`bunx @pisagor/mcp`)
  when available; use this skill for form-field APIs.
compatibility: >-
  Requires React 19, Tailwind v4, @pisagor/react. Optional: @tanstack/react-form for ./tanstack.
---

# @pisagor/react-form

Labeled field helpers on top of `@pisagor/react`.

**Recommended:** `bunx @pisagor/mcp`.

## Layout

```
skills/react-form/
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
Routes: `/react/forms/<id>/develop` and `/design`. Legacy `/usage` and `/examples` redirect to develop.

Flat `references/primitives/<id>.md` is legacy (single file with YAML + body); the docs app still maps it into tabs.

The field id is the folder name (or the legacy filename without `.md`).

Example sources live under `assets/examples/<id>/` (also available via MCP `get_example`).

## Install

```bash
bun add @pisagor/react @pisagor/react-form
# optional — required only for ./tanstack
bun add @tanstack/react-form
```

## Imports

Standalone fields:

```ts
import { TextField, SelectField } from "@pisagor/react-form";
```

TanStack Form (`./tanstack` does **not** re-export field components — use `useAppForm` + `form.AppField`):

```tsx
import { useAppForm } from "@pisagor/react-form/tanstack";

const form = useAppForm({ defaultValues: { email: "" }, onSubmit: async () => {} });

<form.AppField name="email">
  {(field) => <field.TextField label="Email" />}
</form.AppField>
```

## Fields

`AutocompleteField`, `CheckboxField`, `DateField`, `FileField`, `NumberField`, `OtpField`, `PasswordField`, `PhoneField`, `RadioGroupField`, `RichTextEditorField`, `SelectField`, `SliderField`, `SwitchField`, `TagsInputField`, `TextField`, `TextareaField`.

## Rules

- Prefer these fields for labeled controls; compose `Field` from `@pisagor/react` only for custom layouts.
- Class prop: `className`.
- Examples: MCP `get_example` / `list_examples`.

## Source

| Resource | Path |
| -------- | ---- |
| Fields | `@pisagor/react-form` → `src/fields/` |
| TanStack | `@pisagor/react-form/tanstack` → `src/tanstack/` (`useAppForm`, hooks; fields via `field.TextField`) |

Examples ship at `assets/examples/<field>/` (and `assets/examples/tanstack/`). This skill does not own `@pisagor/react` primitives — compose `Field` from that package only for custom layouts.
