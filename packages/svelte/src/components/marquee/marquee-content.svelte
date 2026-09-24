<script lang="ts">
import type { MarqueeContentProps } from "@ark-ui/svelte/marquee";
import { Marquee as MarqueePrimitive } from "@ark-ui/svelte/marquee";
import { cn } from "@pisagor/utils";
import { useMarquee } from "./marquee.context";

type Props = Omit<MarqueeContentProps, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useMarquee();
</script>

<MarqueePrimitive.Viewport class={slots.viewport()}>
  <MarqueePrimitive.Content {...rest} class={slots.content({ class: cn(className) })}>
    {@render children?.()}
  </MarqueePrimitive.Content>
</MarqueePrimitive.Viewport>
