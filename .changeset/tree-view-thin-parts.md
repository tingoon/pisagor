---
"@pisagor/react": minor
"@pisagor/contracts": minor
"@pisagor/presets": patch
---

React `TreeView` follows the thin parts + shorthand pattern. `TreeView` is now a shorthand that
renders the whole `collection` (`label`, `checkbox`, `fileIcons`, `itemIcon`, `branchIcon`,
`branchExpandedIcon`, `classNames`, `branchClassNames`, `itemClassNames`); node `icon` /
`expandedIcon` still apply. Adds `TreeView.Root`, `BranchText`, `BranchTrigger`,
`BranchIndentGuide`, `NodeCheckboxIndicator`, `NodeRenameInput`, `Context`, `NodeContext`,
`TreeViewContract`, and recipe slots (`treeViewBranchRecipe.trigger`, `treeViewItemRecipe.base`).

**Breaking (React):**

- Compound usage starts from `TreeView.Root`; `fileIcons` moved to the shorthand.
- `BranchControl` no longer renders the indicator, folder icon, text, or rename input; compose
  `BranchIndicator` + `BranchText` yourself.
- `BranchContent` no longer renders `BranchIndentGuide`.
- `ItemText` no longer renders a file icon or rename input and drops `icon`.
- `NodeCheckbox` no longer renders a check / minus indicator; add `NodeCheckboxIndicator` with
  your icons.
- `TreeViewProps` is now the shorthand props type; use `TreeViewRootProps` for the root.
  `TreeViewContextProps` and the named `TreeView*` part exports are removed.
