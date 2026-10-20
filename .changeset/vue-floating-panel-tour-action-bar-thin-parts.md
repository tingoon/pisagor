---
"@pisagor/vue": minor
---

Vue `FloatingPanel`, `Tour` and `ActionBar` follow the thin parts + shorthand pattern (mirrors React). Parts are single styled elements; the shorthand renders the teleport, positioner, header controls and buttons. Adds `.Root` and `.Positioner` parts, `Tour.Arrow` / `ArrowTip` / `Control`, and a `useTour` re-export. **Breaking:** compound usage starts from `.Root`; parts no longer render built-in buttons or icons; `FloatingPanel.Maximize` / `Minimize` / `Restore` were removed (use `FloatingPanel.StageTrigger` with `stage`); `Tour.Footer`, `Tour.NextStep`, `Tour.PreviousStep` and `Tour.Trigger` were removed (use `Tour.Control` and `Tour.ActionTrigger`); named component exports (`FloatingPanelRoot`, `TourContent`, `ActionBarBody`, …) are removed (use `.*` parts; the `*Props` types are exported).
