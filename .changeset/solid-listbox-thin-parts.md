---
"@pisagor/solid": minor
---

Solid `Listbox` parts are thin `withProvider` / `withContext` wrappers.

**Breaking (Solid):** `Listbox.ItemIndicator` no longer renders a default check icon; pass your
icon as children.

- `Listbox.ItemGroup` no longer accepts `heading`; render `<Listbox.ItemGroupLabel>` inside it.
