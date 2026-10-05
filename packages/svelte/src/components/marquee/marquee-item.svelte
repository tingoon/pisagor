<script lang="ts">
import {
  type MarqueeItemProps,
  Marquee as MarqueePrimitive,
} from "@ark-ui/svelte/marquee";
import { cn } from "@pisagor/utils";
import { useMarquee } from "./marquee.context";

let { class: className, children, ...rest }: MarqueeItemProps = $props();
const { slots } = useMarquee();
</script>

<MarqueePrimitive.Item {...rest} class={slots.item({ class: cn(className) })}>
  {@render children?.()}
</MarqueePrimitive.Item>
