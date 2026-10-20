---
"@pisagor/solid": minor
---

Solid `ScrollArea` parts are thin. Adds `ScrollArea.Content` and `content` / `corner` recipe
slots; the shorthand applies `classNames.content` / `classNames.corner`.

**Breaking (Solid):** `ScrollArea.Viewport` no longer wraps its children in the Ark content
element; render `<ScrollArea.Content>` inside it.
