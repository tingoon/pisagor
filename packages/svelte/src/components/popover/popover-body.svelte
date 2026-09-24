<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { usePopoverContent } from "./popover.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { children, class: className, ...rest }: Props = $props();
const { slots } = usePopoverContent();
</script>

<Ark as="div" {...rest} class={slots.body({ class: cn(className) })}> {@render children?.()} </Ark>
