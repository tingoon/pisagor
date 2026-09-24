<script lang="ts">
import type { JsonTreeViewRootProps, JsonTreeViewTreeProps } from "@ark-ui/svelte/json-tree-view";
import { JsonTreeView as JsonTreeViewPrimitive } from "@ark-ui/svelte/json-tree-view";
import { type JsonTreeViewRecipeSlot, jsonTreeViewRecipe } from "@pisagor/recipes/json-tree-view";
import { cn } from "@pisagor/utils";
import CaretRightIcon from "phosphor-svelte/lib/CaretRightIcon";
import { setJsonTreeViewContext } from "./json-tree-view.context";

type Props = Omit<JsonTreeViewRootProps, "class" | "children"> & {
  class?: string | undefined;
  classNames?: Partial<Record<JsonTreeViewRecipeSlot, string>>;
  recipe?: typeof jsonTreeViewRecipe;
  renderValue?: JsonTreeViewTreeProps["renderValue"];
  treeProps?: Omit<JsonTreeViewTreeProps, "arrow" | "class" | "renderValue">;
};

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

<JsonTreeViewPrimitive.Root {...rest} class={slots.base({ class: cn(className) })}>
  <JsonTreeViewPrimitive.Tree
    {...treeProps}
    {arrow}
    class={slots.tree({ class: cn(classNames?.tree) })}
    {renderValue}
  />
</JsonTreeViewPrimitive.Root>
