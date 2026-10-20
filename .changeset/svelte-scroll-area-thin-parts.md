---
"@pisagor/svelte": minor
---

Svelte `ScrollArea` parts are thin. Adds `ScrollArea.Content` and `ScrollArea.Corner`; the
shorthand applies `classNames.content` / `classNames.corner`.

**Breaking (Svelte):** `ScrollArea.Viewport` no longer wraps its children in the Ark content
element; render `<ScrollArea.Content>` inside it.
