## Import

```ts
import { TreeView } from "@pisagor/vue";
```

## Anatomy

```vue
<TreeView collection={collection}>
  <TreeView.Tree>
    <TreeView.NodeProvider>
      <TreeView.Branch>
        <TreeView.BranchControl />
        <TreeView.BranchContent />
      </TreeView.Branch>
      <TreeView.Item>
        <TreeView.ItemText />
      </TreeView.Item>
    </TreeView.NodeProvider>
  </TreeView.Tree>
</TreeView>
```

## Examples

### Default

Browse nested folders or categories in an expandable tree.

:::example Default

### Custom Icons

Customize tree icons across folders and items.

:::example CustomIcons

### Custom Icons Folder

Customize folder icons to match the content type.

:::example CustomIconsFolder

### Custom Icons Item

Customize item icons to match the content type.

:::example CustomIconsItem

### Checkbox Tree

Select nodes with checkboxes when membership spans a hierarchy.

:::example CheckboxTree

### With Context Menu

Offer pointer actions on nodes for rename, delete, or other commands.

:::example WithContextMenu

### As child

Render items as links when navigation is the primary action.

:::example Links

### Controlled

Manage state from the parent when other UI must stay in sync with this tree view.

:::example Controlled

### Multiple Selection

Allow selecting more than one node.

:::example MultipleSelection

### Rename

Rename a node inline when labels are user-editable.

:::example Rename
