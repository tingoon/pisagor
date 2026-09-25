<script lang="ts">
import type { AccordionItemContentProps } from "@ark-ui/svelte/accordion";
import { Accordion as AccordionPrimitive } from "@ark-ui/svelte/accordion";
import { cn } from "@pisagor/utils";
import { useAccordionItem } from "./accordion.context";

type Props = Omit<AccordionItemContentProps, "class"> & {
  class?: string | undefined;
};

let { children, class: className, ...rest }: Props = $props();
const { slots } = useAccordionItem();
</script>

<AccordionPrimitive.ItemContent {...rest} class={slots.content({ class: cn(className) })}>
  <div class={slots.body()}>
    {@render children?.()}
  </div>
</AccordionPrimitive.ItemContent>
