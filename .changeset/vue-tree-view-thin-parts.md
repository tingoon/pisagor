---
"@pisagor/vue": minor
---

Vue `TreeView` follows the thin parts + shorthand pattern (mirrors React). `TreeView` is now a shorthand that renders the whole `collection` (`label`, `checkbox`, `fileIcons`, `itemIcon`, `branchIcon`, `branchExpandedIcon`, `classNames`, `branchClassNames`, `itemClassNames`); adds `TreeView.Root`, `BranchText`, `BranchTrigger`, `BranchIndentGuide`, `NodeCheckboxIndicator`, `NodeRenameInput`, `Context`, `NodeContext`. **Breaking:** compound usage starts from `TreeView.Root`; `BranchControl` / `ItemText` / `NodeCheckbox` no longer render indicators, icons, text wrappers or rename inputs; `BranchContent` no longer renders the indent guide; `fileIcons` moved to the shorthand; `TreeViewNodeInput` became `NodeRenameInput` and the `TreeViewItemTitle` export was removed.
