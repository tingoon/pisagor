<script lang="ts">
import type { ComboboxTriggerProps } from "@ark-ui/svelte/combobox";
import { Combobox as ComboboxPrimitive } from "@ark-ui/svelte/combobox";
import { buttonRecipe } from "@pisagor/recipes/button";
import { comboboxRecipe } from "@pisagor/recipes/combobox";
import { cn } from "@pisagor/utils";
import CaretUpDownIcon from "phosphor-svelte/lib/CaretUpDownIcon";
import { useComboboxRoot } from "./combobox.context";

type Props = Omit<ComboboxTriggerProps, "class"> & { class?: string | undefined };

let { children, class: className, ...rest }: Props = $props();
const ctx = useComboboxRoot();
const slots = $derived(ctx?.slots ?? comboboxRecipe());
</script>

<ComboboxPrimitive.Trigger
  {...rest}
  aria-label="Toggle"
  class={cn(
  buttonRecipe({ size: "icon-xs", variant: "ghost" }).base(),
  slots.trigger({ class: cn(className) }),
  slots.triggerButton(),
)}
  type="button"
>
  {#if children}
    {@render children()}
  {:else}
    <CaretUpDownIcon aria-hidden="true" />
  {/if}
</ComboboxPrimitive.Trigger>
