---
"@pisagor/react": minor
"@pisagor/presets": patch
---

React `SegmentGroup` parts are thin 1:1 Ark wrappers. Adds `ItemText`, `ItemControl`,
`ItemHiddenInput`, and an `itemControl` recipe slot; the shorthand now applies `classNames`.

**Breaking (React):**

- `SegmentGroup.Root` no longer renders `Indicator`; add `<SegmentGroup.Indicator />`.
- `SegmentGroup.Item` no longer renders text, control, or hidden input and drops `text`; compose
  `ItemText`, `ItemControl`, and `ItemHiddenInput` inside it.
- Named `SegmentGroupIndicator` / `SegmentGroupItem` exports are removed; use `SegmentGroup.*`.
