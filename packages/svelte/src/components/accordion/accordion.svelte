<script lang="ts">
  import type { AccordionRootProps } from "@ark-ui/svelte/accordion";
  import AccordionItem from "./accordion-item.svelte";
  import AccordionItemContent from "./accordion-item-content.svelte";
  import AccordionItemTrigger from "./accordion-item-trigger.svelte";
  import AccordionRoot from "./accordion-root.svelte";

  type AccordionPresetItem = {
    content: string;
    disabled?: boolean;
    title: string;
    value: string;
  };

  type Props = Omit<AccordionRootProps, "children"> & {
    items?: AccordionPresetItem[];
    /** Size scale applied to every item. */
    size?: "sm" | "md" | "lg";
  };

  let { items, size, ...rest }: Props = $props();
</script>

<AccordionRoot {...rest}>
  {#each items ?? [] as item (item.value)}
    <AccordionItem disabled={item.disabled} {size} value={item.value}>
      <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
      <AccordionItemContent>{item.content}</AccordionItemContent>
    </AccordionItem>
  {/each}
</AccordionRoot>
