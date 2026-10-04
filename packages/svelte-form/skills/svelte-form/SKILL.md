---
name: svelte-form
description: >-
  Pisagor `@pisagor/svelte-form` — labeled field compositions and TanStack Form bindings for Svelte.
  Use when building forms with TextField, SelectField, CheckboxField, etc., or integrating
  @tanstack/svelte-form. Ships inside the npm package for Intent. Prefer MCP (`bunx @pisagor/mcp`)
  when available; use this skill for form-field APIs.
compatibility: >-
  Requires Svelte 5, Tailwind v4, @pisagor/svelte. Optional: @tanstack/svelte-form for ./tanstack.
---

# @pisagor/svelte-form

Labeled field helpers on top of `@pisagor/svelte`.

**Recommended:** `bunx @pisagor/mcp`.

## Layout

```
skills/svelte-form/
  SKILL.md
  references/          # primitives/
  assets/examples/     # <field>/*
```

### Primitive docs

Prefer the **folder** form (tabs on the docs site):

```
references/primitives/<id>/
  metadata.md    # YAML frontmatter only (title, description, api, taxonomy, aliases?)
  design.md      # When to use (Prefer / Avoid)
  usage.md       # Recommended API, Import, Anatomy
  examples.md    # ### titles + :::example ExportName
  develop.md     # Accessibility / keyboard (Props table is appended by the docs app)
```

Docs tabs (order): **Examples** → **Usage** → **Design** → **Develop**.
Each tab is a real route: `/svelte/forms/<id>/<tab>` (e.g. `…/text-field/usage`).
`/svelte/forms/<id>` redirects to the default tab.

Flat `references/primitives/<id>.md` is legacy (single file with YAML + body); the docs app still maps it into tabs.

The field id is the folder name (or the legacy filename without `.md`).

Example sources live under `assets/examples/<id>/` (also available via MCP `get_example`).

## Install

```bash
bun add @pisagor/svelte @pisagor/svelte-form
# optional — required only for ./tanstack
bun add @tanstack/svelte-form
```

## Imports

Standalone fields:

```ts
import { TextField, SelectField } from "@pisagor/svelte-form";
```

TanStack Form (`./tanstack` does **not** re-export field components — use `createAppForm` + `form.AppField`).
Svelte uses `createAppForm` (not `useAppForm`):

```svelte
<script lang="ts">
  import { createAppForm, Root } from "@pisagor/svelte-form/tanstack";

  const form = createAppForm(() => ({
    defaultValues: { email: "" },
    onSubmit: async () => {},
  }));
</script>

<Root {form}>
  <form.AppField name="email">
    {#snippet children(field)}
      <field.TextField label="Email" />
    {/snippet}
  </form.AppField>
</Root>
```

## Fields

`AutocompleteField`, `CheckboxField`, `DateField`, `FileField`, `NumberField`, `OtpField`, `PasswordField`, `PhoneField`, `RadioGroupField`, `RichTextEditorField`, `SelectField`, `SliderField`, `SwitchField`, `TagsInputField`, `TextField`, `TextareaField`.

## Rules

- Prefer these fields for labeled controls; compose `Field` from `@pisagor/svelte` only for custom layouts.
- Class prop: `class` (not `className`).
- Examples: MCP `get_example` / `list_examples`.

## Source

| Resource | Path |
| -------- | ---- |
| Fields | `@pisagor/svelte-form` → `src/fields/` |
| TanStack | `@pisagor/svelte-form/tanstack` → `src/tanstack/` (`createAppForm`, hooks; fields via `field.TextField`) |

Examples ship at `assets/examples/<field>/` (and `assets/examples/tanstack/`).
