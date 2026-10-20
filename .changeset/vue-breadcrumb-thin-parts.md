---
"@pisagor/vue": minor
---

Vue `Breadcrumb` parts are thin; the shorthand adds `separator` (prop or `#separator` slot,
defaults to a caret) and applies `classNames`.

**Breaking (Vue):**

- `Breadcrumb.Separator` no longer renders a default caret; pass your icon or text as children.
- `Breadcrumb.Ellipsis` no longer renders a dots icon (it keeps the localized screen-reader text);
  pass your icon as children.
