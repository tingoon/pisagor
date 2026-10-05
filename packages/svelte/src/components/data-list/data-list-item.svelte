<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { DataListItemProps as BaseDataListItemProps } from "@pisagor/props";
import {
  type DataListItemRecipeSlot,
  dataListItemRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { setDataListItemContext } from "./data-list.context";
import DataListItemLabel from "./data-list-item-label.svelte";
import DataListItemValue from "./data-list-item-value.svelte";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: Snippet;
  classNames?: Partial<Record<DataListItemRecipeSlot, string>>;
  value?: string | Snippet;
} & BaseDataListItemProps;

let {
  value,
  children,
  recipe = dataListItemRecipe,
  class: className,
  classNames,
  ...rest
}: Props = $props();

const slots = $derived(recipe());

setDataListItemContext({
  get slots() {
    return slots;
  },
});
</script>

<Ark
  as="div"
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-part="item"
  data-scope="data-list"
>
  {#if children}
    <DataListItemLabel class={classNames?.label}>
      {@render children()}
    </DataListItemLabel>
  {/if}
  {#if value != null}
    <DataListItemValue class={classNames?.value}>
      {#if typeof value === "string"}
        {value}
      {:else}
        {@render value()}
      {/if}
    </DataListItemValue>
  {/if}
</Ark>
