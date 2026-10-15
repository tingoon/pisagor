import JsonTreeViewShorthand from "./json-tree-view.svelte";
import JsonTreeViewRoot from "./json-tree-view-root.svelte";
import JsonTreeViewTree from "./json-tree-view-tree.svelte";

export type { JsonTreeViewTreeProps } from "@ark-ui/svelte/json-tree-view";

export const JsonTreeView = Object.assign(JsonTreeViewShorthand, {
  Root: JsonTreeViewRoot,
  Tree: JsonTreeViewTree,
});
