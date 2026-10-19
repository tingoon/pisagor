---
"@pisagor/react": minor
"@pisagor/presets": patch
---

React `DropdownMenu` and `ContextMenu` follow the thin parts + shorthand pattern. `DropdownMenu`
is now a shorthand (`trigger`, children, `showArrow`, `classNames`) and `ContextMenu` is a
shorthand (`trigger` area content, children, `classNames`). Every part maps 1:1 to an Ark menu
part and keeps `data-scope="menu"`. Adds the Ark `Indicator` and `ArrowTip` parts.

**Breaking (React):**

- Compound usage starts from `DropdownMenu.Root` / `ContextMenu.Root`, and you render `Portal`
  and `Positioner` yourself (`Content` no longer adds them).
- `SubContent` is removed: inside `Sub`, render `Portal` > `Positioner` > `Content`.
- `CheckboxItem` / `RadioItem` no longer render the check icon and label: compose
  `<ItemIndicator><CheckIcon /></ItemIndicator>` and `<ItemText>`. `ItemIndicator` has no
  default icon.
- `TriggerItem` no longer renders a caret: add `<Indicator><CaretRightIcon /></Indicator>`.
- The `recipe` prop moves from `Content` to the root (`Root` / `Sub`).
- Named `DropdownMenuRoot`, `ContextMenuRoot`, … function exports are removed.
- `AlertDialog.Trigger` keeps `data-scope="dialog"` so focus returns to the trigger on close.

`dropdownMenuRecipe` gains `arrow`, `base`, `itemGroup`, `radioItemGroup` and `trigger` empty
slots and an `indicator` slot.
