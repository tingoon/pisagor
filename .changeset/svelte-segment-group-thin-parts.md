---
"@pisagor/svelte": minor
---

Svelte `SegmentGroup` parts are thin 1:1 Ark wrappers. Adds `ItemText`, `ItemControl` and
`ItemHiddenInput`; the shorthand now applies `classNames`.

**Breaking (Svelte):**

- `SegmentGroup.Root` no longer renders `Indicator`; add `<SegmentGroup.Indicator />`.
- `SegmentGroup.Item` no longer renders text, control, or hidden input; compose `ItemText`,
  `ItemControl`, and `ItemHiddenInput` inside it.
