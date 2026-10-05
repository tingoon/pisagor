<script lang="ts">
import {
  type ComboboxContentProps as ArkContentProps,
  Combobox as ComboboxPrimitive,
} from "@ark-ui/svelte/combobox";
import { Portal } from "@ark-ui/svelte/portal";
import { comboboxRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { useComboboxRoot } from "./combobox.context";
import ComboboxPositioner from "./combobox-positioner.svelte";

type Props = ArkContentProps & { portalled?: boolean };

let { portalled = true, children, class: className, ...rest }: Props = $props();
const ctx = useComboboxRoot();
const slots = $derived(ctx?.slots ?? comboboxRecipe());
</script>

{#if portalled}
  <Portal>
    <ComboboxPositioner>
      <ComboboxPrimitive.Content
        {...rest}
        class={slots.content({ class: cn(className) })}
      >
        {@render children?.()}
      </ComboboxPrimitive.Content>
    </ComboboxPositioner>
  </Portal>
{:else}
  <ComboboxPrimitive.Content
    {...rest}
    class={slots.content({ class: cn(className) })}
  >
    {@render children?.()}
  </ComboboxPrimitive.Content>
{/if}
