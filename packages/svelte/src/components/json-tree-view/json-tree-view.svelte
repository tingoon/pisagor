<script lang="ts">
import type {
  JsonTreeViewRootProps,
  JsonTreeViewTreeProps,
} from "@ark-ui/svelte/json-tree-view";
import type { JsonTreeViewProps as BaseJsonTreeViewProps } from "@pisagor/props";
import type { JsonTreeViewRecipeSlot } from "@pisagor/recipes";
import CaretRightIcon from "phosphor-svelte/lib/CaretRightIcon";
import type { VariantClassNames } from "../../internal/types";
import JsonTreeViewRoot from "./json-tree-view-root.svelte";
import JsonTreeViewTree from "./json-tree-view-tree.svelte";

type Props = Omit<JsonTreeViewRootProps, "children"> & {
  /** Slot class names */
  classNames?: VariantClassNames<JsonTreeViewRecipeSlot>;
  renderValue?: JsonTreeViewTreeProps["renderValue"];
  /** Extra props forwarded to the json tree view tree element */
  treeProps?: Omit<JsonTreeViewTreeProps, "arrow" | "class" | "renderValue">;
} & BaseJsonTreeViewProps;

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
