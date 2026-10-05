<script lang="ts">
import {
  type MarqueeEdgeProps,
  Marquee as MarqueePrimitive,
} from "@ark-ui/svelte/marquee";
import { cn } from "@pisagor/utils";
import { useMarquee } from "./marquee.context";

let { class: className, ...rest }: MarqueeEdgeProps = $props();
const { slots } = useMarquee();
</script>

<MarqueePrimitive.Edge {...rest} class={slots.edge({ class: cn(className) })} />
