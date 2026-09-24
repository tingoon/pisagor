<script lang="ts">
import type { ComboboxItemProps as ArkItemProps } from "@ark-ui/svelte/combobox";
import { Combobox as ComboboxPrimitive } from "@ark-ui/svelte/combobox";
import { type ComboboxVariantProps, comboboxRecipe } from "@pisagor/recipes/combobox";
import { cn } from "@pisagor/utils";
import CheckIcon from "phosphor-svelte/lib/CheckIcon";
import { useComboboxRoot } from "./combobox.context";

type Props = Omit<ArkItemProps, "class"> &
  ComboboxVariantProps & {
    class?: string | undefined;
  };

let { showIndicator = true, children, class: className, ...rest }: Props = $props();
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
