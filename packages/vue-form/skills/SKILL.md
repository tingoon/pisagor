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

Labeled field helpers on top of `@pisagor/vue`. Sibling: `@pisagor/react-form`.

**Recommended:** `bunx @pisagor/mcp`.

## Install

```bash
bun add @pisagor/vue-form
# optional TanStack bindings
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
// field.TextField via form.AppField (same model as react-form)
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
