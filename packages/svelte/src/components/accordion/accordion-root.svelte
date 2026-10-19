<script lang="ts">
  import {
    Accordion as AccordionPrimitive,
    type AccordionRootProps as ArkAccordionRootProps,
  } from "@ark-ui/svelte";
  import type { AccordionRootContract } from "@pisagor/contracts";
  import { withAccordionProvider } from "./accordion.context";

  type Props = ArkAccordionRootProps & AccordionRootContract;

  let { collapsible = true, children, ...rest }: Props = $props();

  const root = withAccordionProvider(() => ({ ...rest, collapsible }), {
    name: "Root",
    slot: "base",
  });
</script>

<AccordionPrimitive.Root {...root.props}>
  {@render children?.()}
</AccordionPrimitive.Root>
