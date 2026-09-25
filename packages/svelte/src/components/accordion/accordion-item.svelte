<script lang="ts">
import type { AccordionItemProps as ArkAccordionItemProps } from "@ark-ui/svelte/accordion";
import { Accordion as AccordionPrimitive } from "@ark-ui/svelte/accordion";
import { accordionItemRecipe } from "@pisagor/recipes/accordion";
import { cn } from "@pisagor/utils";
import { setAccordionItemContext } from "./accordion.context";

type Props = Omit<ArkAccordionItemProps, "class"> & {
  class?: string | undefined;
  itemRecipe?: typeof accordionItemRecipe;
};

let { children, itemRecipe = accordionItemRecipe, class: className, ...rest }: Props = $props();

const slots = $derived(itemRecipe());

setAccordionItemContext({
  get slots() {
    return slots;
  },
});
</script>

<AccordionPrimitive.Item {...rest} class={slots.base({ class: cn(className) })}>
  {@render children?.()}
</AccordionPrimitive.Item>
