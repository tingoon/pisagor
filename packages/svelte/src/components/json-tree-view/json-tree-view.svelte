<script lang="ts">
  import type {
    JsonTreeViewRootProps,
    JsonTreeViewTreeProps,
  } from "@ark-ui/svelte";
  import type {
    JsonTreeViewContract,
    JsonTreeViewRootContract,
  } from "@pisagor/contracts";

  import { CaretRightIcon } from "phosphor-svelte";

  import JsonTreeViewRoot from "./json-tree-view-root.svelte";
  import JsonTreeViewTree from "./json-tree-view-tree.svelte";

  type Props = Omit<JsonTreeViewRootProps, "children"> & {
    renderValue?: JsonTreeViewTreeProps["renderValue"];
    /** Extra props forwarded to the json tree view tree element */
    treeProps?: Omit<JsonTreeViewTreeProps, "arrow" | "class" | "renderValue">;
  } & JsonTreeViewRootContract &
    JsonTreeViewContract;

  let { renderValue, treeProps, classNames, ...rest }: Props = $props();
</script>

{#snippet arrow()}
  <CaretRightIcon />
{/snippet}

<JsonTreeViewRoot {...rest}>
  <JsonTreeViewTree
    {...treeProps}
    {arrow}
    class={classNames?.tree}
    {renderValue}
  />
</JsonTreeViewRoot>
