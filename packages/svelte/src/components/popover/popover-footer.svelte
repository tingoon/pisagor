<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { usePopoverContent } from "./popover.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
};

let { children, class: className, ...rest }: Props = $props();
const { slots } = usePopoverContent();
</script>

<Ark as="div" {...rest} class={slots.footer({ class: cn(className) })}>
  {@render children?.()}
</Ark>
