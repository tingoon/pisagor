<script lang="ts">
  import {
    Accordion as AccordionPrimitive,
    type AccordionItemTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./accordion.context";

  let { children, ...rest }: AccordionItemTriggerProps = $props();
  const part = withContext(() => rest, { name: "ItemTrigger" });
</script>

<AccordionPrimitive.ItemTrigger {...part.props}>
  {@render children?.()}
</AccordionPrimitive.ItemTrigger>
