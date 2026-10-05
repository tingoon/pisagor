<script lang="ts">
import {
  type MarqueeContentProps,
  Marquee as MarqueePrimitive,
} from "@ark-ui/svelte/marquee";
import { cn } from "@pisagor/utils";
import { useMarquee } from "./marquee.context";

let { class: className, children, ...rest }: MarqueeContentProps = $props();
const { slots } = useMarquee();
</script>

<MarqueePrimitive.Viewport class={slots.viewport()}>
  <MarqueePrimitive.Content
    {...rest}
    class={slots.content({ class: cn(className) })}
  >
    {@render children?.()}
  </MarqueePrimitive.Content>
</MarqueePrimitive.Viewport>
