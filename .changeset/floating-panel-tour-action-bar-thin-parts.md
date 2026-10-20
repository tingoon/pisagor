---
"@pisagor/react": minor
"@pisagor/presets": patch
"@pisagor/utils": patch
---

React `FloatingPanel`, `Tour` and `ActionBar` follow the thin parts + shorthand pattern.

- `FloatingPanel` is a shorthand: `trigger`, `title`, `icon`, children (scrollable body),
  `actions`, `scrollFade`, `resizable`, `showStageControls` and `showCloseButton`. Parts map 1:1
  to Ark (`Positioner`, `DragTrigger`, `StageTrigger`, `ResizeTrigger` are exposed).
- `Tour` is a shorthand: `steps` (and every `useTour` option), `trigger`, children,
  `showArrow`, `showCloseButton` and `classNames`. Compound usage is Ark's: create the tour
  with `useTour` and pass it to `Tour.Root tour={tour}`. `useTour` and `useTourContext` are
  re-exported from Ark.
- `ActionBar` is a shorthand: `trigger`, `count`, `actions`, children (extra body content) and
  `showCloseButton`. Adds `ActionBar.Positioner`.

**Breaking (React):**

- Compound usage starts from `.Root`, and you render `Portal` and `Positioner` yourself.
- FloatingPanel: `Minimize`, `Maximize` and `Restore` are removed (use `StageTrigger` with your
  own icons). `Header` no longer wraps itself in `DragTrigger`, `Body` no longer adds
  `ScrollArea`, and `Content` no longer adds resize handles (`resizable` moved to the shorthand).
- Tour: `Tour.Root` takes `tour` instead of `steps`. `Trigger`, `Footer`, `PreviousStep`,
  `NextStep` and the step-action `Actions` helper are removed; use `Tour.Control` with
  `Tour.Actions` (Ark render prop) and `Tour.ActionTrigger`. `Content` no longer adds the
  backdrop, spotlight, default layout or close button. `useTourContext` now returns the tour
  API directly (it used to return `{ tour, … }`).
- ActionBar: `ActionBar.Root` no longer renders the `count` / `actions` preset (moved to the
  shorthand) and `Content` no longer portals or animates (use `Positioner`).
- Named `FloatingPanelRoot`, `TourRoot`, … function exports are removed. ActionBar keeps its
  named exports.

Recipes gain empty slots for the new parts. Tour gains `header`, `body` and `control` slots.
Adds the `floatingPanel.close` message.
