<script lang="ts">
import type { AccordionItemTriggerProps } from "@ark-ui/svelte/accordion";
import { Accordion as AccordionPrimitive } from "@ark-ui/svelte/accordion";
import { cn } from "@pisagor/utils";
import CaretDownIcon from "phosphor-svelte/lib/CaretDownIcon";
import { useAccordionItem } from "./accordion.context";

type Props = Omit<AccordionItemTriggerProps, "class"> & {
  class?: string | undefined;
};

let { children, class: className, ...rest }: Props = $props();
const { slots } = useAccordionItem();
</script>

<AccordionPrimitive.ItemTrigger {...rest} class={slots.trigger({ class: cn(className) })}>
  {@render children?.()}
  <AccordionPrimitive.ItemIndicator>
    <CaretDownIcon class={slots.indicator()} />
  </AccordionPrimitive.ItemIndicator>
</AccordionPrimitive.ItemTrigger>
