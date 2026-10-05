<script lang="ts">
import type {
  JsonTreeViewRootProps,
  JsonTreeViewTreeProps,
} from "@ark-ui/svelte/json-tree-view";
import { JsonTreeView as JsonTreeViewPrimitive } from "@ark-ui/svelte/json-tree-view";
import type { JsonTreeViewProps as BaseJsonTreeViewProps } from "@pisagor/props";
import {
  type JsonTreeViewRecipeSlot,
  jsonTreeViewRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import CaretRightIcon from "phosphor-svelte/lib/CaretRightIcon";
import { setJsonTreeViewContext } from "./json-tree-view.context";

type Props = Omit<JsonTreeViewRootProps, "children"> & {
  classNames?: Partial<Record<JsonTreeViewRecipeSlot, string>>;
  renderValue?: JsonTreeViewTreeProps["renderValue"];
  treeProps?: Omit<JsonTreeViewTreeProps, "arrow" | "renderValue">;
} & BaseJsonTreeViewProps;

let {
  recipe = jsonTreeViewRecipe,
  class: className,
  classNames,
  renderValue,
  treeProps,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
setJsonTreeViewContext({
  get slots() {
    return slots;
  },
});
</script>

{#snippet arrow()}
  <CaretRightIcon />
{/snippet}

<JsonTreeViewPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
>
  <JsonTreeViewPrimitive.Tree
    {...treeProps}
    {arrow}
    class={slots.tree({ class: classNames?.tree })}
    {renderValue}
  />
</JsonTreeViewPrimitive.Root>
