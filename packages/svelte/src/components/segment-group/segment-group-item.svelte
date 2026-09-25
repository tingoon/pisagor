<script lang="ts">
import type { SegmentGroupItemProps as ArkItemProps } from "@ark-ui/svelte/segment-group";
import { SegmentGroup as SegmentGroupPrimitive } from "@ark-ui/svelte/segment-group";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import { useSegmentGroup } from "./segment-group.context";

type Props = Omit<ArkItemProps, "class"> & {
  class?: string | undefined;
  text?: Snippet | string;
};

let { children, text, class: className, ...rest }: Props = $props();
const { slots } = useSegmentGroup();
</script>

<SegmentGroupPrimitive.Item {...rest} class={slots.item({ class: cn(className) })}>
  {#if children}
    <SegmentGroupPrimitive.ItemText class={slots.itemText()}>
      {@render children()}
    </SegmentGroupPrimitive.ItemText>
  {:else if typeof text === "string"}
    <SegmentGroupPrimitive.ItemText class={slots.itemText()}>{text}</SegmentGroupPrimitive.ItemText>
  {:else if text}
    <SegmentGroupPrimitive.ItemText class={slots.itemText()}
      >{@render text()}</SegmentGroupPrimitive.ItemText
    >
  {/if}
  <SegmentGroupPrimitive.ItemControl />
  <SegmentGroupPrimitive.ItemHiddenInput />
</SegmentGroupPrimitive.Item>
