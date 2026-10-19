<script lang="ts">
  import {
    Accordion as AccordionPrimitive,
    type AccordionItemIndicatorProps,
  } from "@ark-ui/svelte";
  import { CaretDownIcon } from "phosphor-svelte";
  import { withContext } from "./accordion.context";

  let { children, ...rest }: AccordionItemIndicatorProps = $props();
  const part = withContext(() => rest, { name: "ItemIndicator" });
</script>

<AccordionPrimitive.ItemIndicator {...part.props}>
  {#if children}
    {@render children()}
  {:else}
    <CaretDownIcon />
  {/if}
</AccordionPrimitive.ItemIndicator>
