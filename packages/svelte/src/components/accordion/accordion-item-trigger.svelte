<script lang="ts">
import {
  type AccordionItemTriggerProps,
  Accordion as AccordionPrimitive,
} from "@ark-ui/svelte/accordion";
import { cn } from "@pisagor/utils";
import CaretDownIcon from "phosphor-svelte/lib/CaretDownIcon";
import { useAccordionItem } from "./accordion.context";

let {
  children,
  class: className,
  ...rest
}: AccordionItemTriggerProps = $props();
const styles = useAccordionItem();
const slots = $derived(styles.slots);
</script>

<AccordionPrimitive.ItemTrigger
  {...rest}
  class={slots.trigger({ class: cn(className) })}
>
  {@render children?.()}
  <AccordionPrimitive.ItemIndicator>
    <CaretDownIcon class={slots.indicator()} />
  </AccordionPrimitive.ItemIndicator>
</AccordionPrimitive.ItemTrigger>
