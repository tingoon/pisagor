<script lang="ts">
  import {
    Accordion as AccordionPrimitive,
    type AccordionItemContentProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useAccordionItem } from "./accordion.context";

  let {
    children,
    class: className,
    ...rest
  }: AccordionItemContentProps = $props();
  const styles = useAccordionItem();
  const slots = $derived(styles.slots);
</script>

<AccordionPrimitive.ItemContent
  {...rest}
  class={slots.content({ class: cn(className) })}
>
  <div class={slots.body()}>
    {@render children?.()}
  </div>
</AccordionPrimitive.ItemContent>
