---
"@pisagor/react": patch
---

React `ToggleGroup.Item` renders the Ark item directly (styled like `Toggle`) instead of
wrapping a `Toggle`, so it now carries `data-scope="toggle-group"` / `data-part="item"`. The
shorthand applies `classNames.base` / `classNames.item` (previously leaked to the DOM).
