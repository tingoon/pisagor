<script lang="ts">
import type { MarqueeEdgeProps } from "@ark-ui/svelte/marquee";
import { Marquee as MarqueePrimitive } from "@ark-ui/svelte/marquee";
import { cn } from "@pisagor/utils";
import { useMarquee } from "./marquee.context";

type Props = Omit<MarqueeEdgeProps, "class"> & { class?: string | undefined };
let { class: className, ...rest }: Props = $props();
const { slots } = useMarquee();
</script>

<MarqueePrimitive.Edge {...rest} class={slots.edge({ class: cn(className) })} />
