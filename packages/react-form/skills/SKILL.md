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

Labeled field helpers on top of `@pisagor/react`. Sibling: `@pisagor/vue-form`.

**Recommended:** `bunx @pisagor/mcp`.

## Install

```bash
bun add @pisagor/react-form
# optional TanStack bindings
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
