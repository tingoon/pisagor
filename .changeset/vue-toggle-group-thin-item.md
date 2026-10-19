---
"@pisagor/vue": patch
---

Vue `ToggleGroup.Item` renders the Ark item directly (styled like `Toggle`) instead of wrapping a
`Toggle`, so it now carries `data-scope="toggle-group"` / `data-part="item"`. The shorthand applies
`classNames.base` / `classNames.item`. Also fixes `provide()` / `inject()` warnings by running them
in `setup()`, and merges the user `style` with the `--gap` variable.
