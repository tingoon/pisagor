<script lang="ts">
  import type {
    DataListItemContract,
    DataListItemRootContract,
  } from "@pisagor/props";
  import { dataListItemRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  import { Context } from "./data-list.context";
  import DataListItemLabel from "./data-list-item-label.svelte";
  import DataListItemValue from "./data-list-item-value.svelte";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: Snippet;
    value?: string | Snippet;
  } & DataListItemRootContract &
    DataListItemContract;

  let {
    value,
    children,
    recipe = dataListItemRecipe,
    class: className,
    classNames,
    ...rest
  }: Props = $props();

  const slots = $derived(recipe());

  Context.set({
    get slots() {
      return slots;
    },
  });
</script>

<div
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
</div>
