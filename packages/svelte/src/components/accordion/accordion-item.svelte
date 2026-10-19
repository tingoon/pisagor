<script lang="ts">
  import {
    Accordion as AccordionPrimitive,
    type AccordionItemProps as ArkAccordionItemProps,
  } from "@ark-ui/svelte";
  import type {
    AccordionItemRootContract,
    AccordionItemContract,
  } from "@pisagor/contracts";
  import { withProvider } from "./accordion.context";

  type Props = ArkAccordionItemProps &
    AccordionItemRootContract & {
      size?: "sm" | "md" | "lg";
    } & AccordionItemContract;

  let { children, ...rest }: Props = $props();

  const root = withProvider(() => rest, { name: "Item", slot: "base" });
</script>

<AccordionPrimitive.Item {...root.props}>
  {@render children?.()}
</AccordionPrimitive.Item>
