<script lang="ts">
import {
  Accordion as AccordionPrimitive,
  type AccordionItemProps as ArkAccordionItemProps,
} from "@ark-ui/svelte/accordion";
import type { AccordionItemProps as BaseAccordionItemProps } from "@pisagor/props";
import { withProvider } from "./accordion.context";

type Props = ArkAccordionItemProps & BaseAccordionItemProps;

let { children, ...rest }: Props = $props();

const root = withProvider(() => rest, { name: "Item", slot: "base" });
</script>

<AccordionPrimitive.Item {...root.props}>
  {@render children?.()}
</AccordionPrimitive.Item>
