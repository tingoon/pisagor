<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type ComboboxTriggerProps,
  } from "@ark-ui/svelte";
  import { buttonRecipe, comboboxRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { CaretUpDownIcon } from "phosphor-svelte";
  import { useMessageResolver } from "../provider/context";
  import { useComboboxRoot } from "./combobox.context";

  const t = useMessageResolver();

  let { children, class: className, ...rest }: ComboboxTriggerProps = $props();
  const ctx = useComboboxRoot();
  const slots = $derived(ctx?.slots ?? comboboxRecipe());
</script>

<ComboboxPrimitive.Trigger
  aria-label={t("combobox.toggle")}
  {...rest}
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
