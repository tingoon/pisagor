<script lang="ts">
  import {
    Accordion as AccordionPrimitive,
    type AccordionItemContentProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./accordion.context";

  let { children, ...rest }: AccordionItemContentProps = $props();
  const part = withContext(() => rest, { name: "ItemContent" });
</script>

<AccordionPrimitive.ItemContent {...part.props}>
  {@render children?.()}
</AccordionPrimitive.ItemContent>
