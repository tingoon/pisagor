---
"@pisagor/solid": minor
---

Solid `TreeView` follows the thin parts + shorthand pattern (mirrors React). `TreeView` is now a shorthand that renders the whole tree from `collection` (`label`, `checkbox`, `branchIcon`, `branchExpandedIcon`, `itemIcon`, `fileIcons`, `classNames`, `branchClassNames`, `itemClassNames`). Parts are 1:1 with Ark and no longer bake icons: `BranchControl`, `BranchIndicator`, `BranchContent`, `ItemText` and `NodeCheckbox` render only their children; new `Root`, `BranchText`, `BranchTrigger`, `BranchIndentGuide`, `NodeCheckboxIndicator`, `NodeRenameInput`, `NodeContext` and `Context` parts. **Breaking:** compound usage starts from `TreeView.Root`; the `icon`/`expandedIcon` props on `BranchControl`/`ItemText` are removed (render icons as children); named `TreeViewRoot`, … exports are removed.
