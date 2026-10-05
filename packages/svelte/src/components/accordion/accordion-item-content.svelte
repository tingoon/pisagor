<script lang="ts">
import {
  type AccordionItemContentProps,
  Accordion as AccordionPrimitive,
} from "@ark-ui/svelte/accordion";
import { cn } from "@pisagor/utils";
import { useAccordionItem } from "./accordion.context";

let {
  children,
  class: className,
  ...rest
}: AccordionItemContentProps = $props();
const { slots } = useAccordionItem();
</script>

<AccordionPrimitive.ItemContent
  {...rest}
  class={slots.content({ class: cn(className) })}
>
  <div class={slots.body()}>
    {@render children?.()}
  </div>
</AccordionPrimitive.ItemContent>
