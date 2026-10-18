<script lang="ts">
  import {
    SegmentGroup as SegmentGroupPrimitive,
    type SegmentGroupItemProps as ArkItemProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import type { Snippet } from "svelte";
  import { useStyles } from "./segment-group.context";

  type Props = ArkItemProps & { text?: Snippet | string };

  let { children, text, class: className, ...rest }: Props = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<SegmentGroupPrimitive.Item
  {...rest}
  class={slots.item({ class: cn(className) })}
>
  {#if children}
    <SegmentGroupPrimitive.ItemText class={slots.itemText()}>
      {@render children()}
    </SegmentGroupPrimitive.ItemText>
  {:else if typeof text === "string"}
    <SegmentGroupPrimitive.ItemText class={slots.itemText()}
      >{text}</SegmentGroupPrimitive.ItemText
    >
  {:else if text}
    <SegmentGroupPrimitive.ItemText class={slots.itemText()}
      >{@render text()}</SegmentGroupPrimitive.ItemText
    >
  {/if}
  <SegmentGroupPrimitive.ItemControl />
  <SegmentGroupPrimitive.ItemHiddenInput />
</SegmentGroupPrimitive.Item>
