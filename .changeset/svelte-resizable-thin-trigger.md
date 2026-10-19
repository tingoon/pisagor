---
"@pisagor/svelte": minor
---

Svelte `Resizable.ResizeTrigger` is now a thin part: the `withHandle` prop is removed and it no longer renders a default indicator or grip icon. Compose `<Resizable.ResizeTriggerIndicator />` or the new `<Resizable.ResizeTriggerHandle><DotsSixVerticalIcon /></Resizable.ResizeTriggerHandle>` as children.
