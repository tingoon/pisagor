<script lang="ts">
import {
  Accordion as AccordionPrimitive,
  type AccordionItemProps as ArkAccordionItemProps,
} from "@ark-ui/svelte/accordion";
import type { AccordionItemProps as BaseAccordionItemProps } from "@pisagor/props";
import { accordionItemRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setAccordionItemContext } from "./accordion.context";

type Props = ArkAccordionItemProps & BaseAccordionItemProps;

let {
  children,
  recipe = accordionItemRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());

setAccordionItemContext({
  get slots() {
    return slots;
  },
});
</script>

<AccordionPrimitive.Item {...rest} class={slots.base({ class: cn(className) })}>
  {@render children?.()}
</AccordionPrimitive.Item>
