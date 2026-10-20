---
"@pisagor/vue": minor
---

Vue `SegmentGroup` parts are thin 1:1 Ark wrappers. `ItemText`, `ItemControl`, and
`ItemHiddenInput` are plain parts; the shorthand renders the indicator and applies `classNames`.

**Breaking (Vue):**

- `SegmentGroup.Root` no longer renders `Indicator`; add `<SegmentGroup.Indicator />`.
- `SegmentGroup.Item` no longer renders text, control, or hidden input; compose `ItemText`,
  `ItemControl`, and `ItemHiddenInput` inside it.
