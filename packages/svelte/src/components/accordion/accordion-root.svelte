<script lang="ts">
  import {
    Accordion as AccordionPrimitive,
    type AccordionRootProps,
  } from "@ark-ui/svelte";

  let { collapsible = true, children, ...rest }: AccordionRootProps = $props();
</script>

<AccordionPrimitive.Root {...rest} {collapsible}>
  {@render children?.()}
</AccordionPrimitive.Root>
