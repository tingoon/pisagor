---
title: Tree View
description: "Browses nested folders or categories in an expandable tree for files, navigation, and pickers."
api: compound
taxonomy: pattern
aliases:
  - tree
---

## When to use

- Browse nested folders or categories in an expandable tree.
- Prefer Tree View for hierarchical data; prefer Listbox for flat option sets.
- Support selection, rename, and context menus when file-manager behaviors are required.

## Import

```tsx
import { TreeView } from "@pisagor/solid";
```

Style with `@pisagor/recipes/tree-view` — no app-level `tv()`.

## Examples

### Links

Render items as links when navigation is the primary action.

:::example Links

### Checkbox Tree

Select nodes with checkboxes when membership spans a hierarchy.

:::example CheckboxTree

### With Context Menu

Offer pointer actions on nodes for rename, delete, or other commands.

:::example WithContextMenu

### Custom Icons Folder

Customize folder icons to match the content type.

:::example CustomIconsFolder

### Custom Icons Item

Customize item icons to match the content type.

:::example CustomIconsItem

### Custom Icons

Customize tree icons across folders and items.

:::example CustomIcons

### Multiple Selection

Allow selecting more than one node.

:::example MultipleSelection

### Rename

Rename a node inline when labels are user-editable.

:::example Rename

### Controlled

Manage state from the parent when other UI must stay in sync with this tree view.

:::example Controlled

### Default

Browse nested folders or categories in an expandable tree.

:::example Default
