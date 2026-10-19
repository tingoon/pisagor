---
"@pisagor/vue": minor
---

Vue `ScrollArea` parts are thin. Adds `ScrollArea.Content` and a styled `ScrollArea.Corner`; the
shorthand applies `classNames.content` / `classNames.corner`.

**Breaking (Vue):** `ScrollArea.Viewport` no longer wraps its children in the Ark content element;
render `<ScrollArea.Content>` inside it.
