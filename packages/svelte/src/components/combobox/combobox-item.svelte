<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type ComboboxItemProps as ArkItemProps,
  } from "@ark-ui/svelte";
  import type { ComboboxRootContract } from "@pisagor/props";
  import { comboboxRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { CheckIcon } from "phosphor-svelte";
  import { useComboboxRoot } from "./combobox.context";

  type Props = ArkItemProps & ComboboxRootContract;

  let {
    showIndicator = true,
    children,
    class: className,
    ...rest
  }: Props = $props();
  const ctx = useComboboxRoot();
  const slots = $derived(ctx?.slots ?? comboboxRecipe());
</script>

<ComboboxPrimitive.Item
  {...rest}
  class={slots.item({ class: cn(className), showIndicator })}
  persistFocus
>
  {@render children?.()}
  {#if showIndicator}
    <span class={slots.itemIndicator()}>
      <ComboboxPrimitive.ItemIndicator>
        <CheckIcon />
      </ComboboxPrimitive.ItemIndicator>
    </span>
  {/if}
</ComboboxPrimitive.Item>
