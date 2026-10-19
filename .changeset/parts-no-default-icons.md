---
"@pisagor/react": minor
---

React parts no longer bake in icons; pass your own (shorthands keep their defaults).

**Breaking (React):**

- `Collapsible.Indicator` no longer renders a caret.
- `TreeView.BranchIndicator` no longer renders a caret.
- `Pagination.Ellipsis` no longer renders a dots icon.
- `Steps.Indicator` now renders only its children; the completed check (and label hiding) moved
  to the `Steps` shorthand.
