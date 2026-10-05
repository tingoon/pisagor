<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { usePopoverContent } from "./popover.context";
import PopoverDescription from "./popover-description.svelte";
import PopoverTitle from "./popover-title.svelte";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
  description?: string;
  title?: string;
};

let {
  children,
  description,
  title,
  class: className,
  ...rest
}: Props = $props();
const { slots } = usePopoverContent();
</script>

<Ark as="div" {...rest} class={slots.header({ class: cn(className) })}>
  {#if title}
    <PopoverTitle>{title}</PopoverTitle>
  {/if}
  {#if description}
    <PopoverDescription>{description}</PopoverDescription>
  {/if}
  {@render children?.()}
</Ark>
