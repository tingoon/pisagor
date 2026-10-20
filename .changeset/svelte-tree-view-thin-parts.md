---
"@pisagor/svelte": minor
---

Svelte `TreeView` follows the thin parts + shorthand pattern (mirrors React). `TreeView` is now a shorthand that renders the whole tree from `collection` (`label`, `checkbox`, `branchIcon`, `branchExpandedIcon`, `itemIcon`, `fileIcons`, `classNames`, `branchClassNames`, `itemClassNames`; node `icon` / `expandedIcon` still apply). Parts are 1:1 with Ark and no longer bake icons: `BranchControl`, `BranchIndicator`, `BranchContent`, `ItemText` and `NodeCheckbox` render only their children; new `Root`, `BranchText`, `BranchTrigger`, `BranchIndentGuide`, `NodeCheckboxIndicator`, `NodeRenameInput`, `NodeContext` and `Context` parts. **Breaking:** compound usage starts from `TreeView.Root` (previously `TreeView` itself was the root); `fileIcons` moved from the root to the shorthand; the `icon` / `expandedIcon` props on `BranchControl` / `ItemText` are removed (render icons as children).
