<script lang="ts">
  import {
    Accordion as AccordionPrimitive,
    type AccordionItemTriggerProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { CaretDownIcon } from "phosphor-svelte";
  import { useStyles } from "./accordion.context";

  let {
    children,
    class: className,
    ...rest
  }: AccordionItemTriggerProps = $props();
  const styles = useStyles();
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
