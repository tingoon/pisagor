---
"@pisagor/svelte": minor
---

Svelte `Breadcrumb` parts are thin; the shorthand adds a `separator` snippet (defaults to a caret) and now applies `classNames` (`base` / `list` / `separator`). `Breadcrumb.Root` is styled via the `base` slot.

**Breaking (Svelte):**

- `Breadcrumb.Separator` no longer renders a default caret; pass your icon or text as children.
- `Breadcrumb.Ellipsis` no longer renders a dots icon (it keeps the localized screen-reader text);
  pass your icon as children.
