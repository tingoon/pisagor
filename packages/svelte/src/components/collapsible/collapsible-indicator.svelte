<script lang="ts">
  import {
    Collapsible as CollapsiblePrimitive,
    type CollapsibleIndicatorProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { CaretDownIcon } from "phosphor-svelte";
  import { useStyles } from "./collapsible.context";

  let {
    class: className,
    children,
    ...rest
  }: CollapsibleIndicatorProps = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<CollapsiblePrimitive.Indicator
  {...rest}
  class={slots.indicator({ class: cn(className) })}
>
  {#if children}
    {@render children()}
  {:else}
    <CaretDownIcon class={slots.icon()} />
  {/if}
</CollapsiblePrimitive.Indicator>
