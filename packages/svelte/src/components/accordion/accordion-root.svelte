<script lang="ts">
import type { AccordionRootProps } from "@ark-ui/svelte/accordion";
import { Accordion as AccordionPrimitive } from "@ark-ui/svelte/accordion";

type Props = AccordionRootProps;

let { collapsible = true, children, ...rest }: Props = $props();
</script>

<AccordionPrimitive.Root {...rest} {collapsible}> {@render children?.()} </AccordionPrimitive.Root>
