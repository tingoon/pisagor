<script lang="ts">
import type { MarqueeItemProps } from "@ark-ui/svelte/marquee";
import { Marquee as MarqueePrimitive } from "@ark-ui/svelte/marquee";
import { cn } from "@pisagor/utils";
import { useMarquee } from "./marquee.context";

type Props = Omit<MarqueeItemProps, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useMarquee();
</script>

<MarqueePrimitive.Item {...rest} class={slots.item({ class: cn(className) })}>
  {@render children?.()}
</MarqueePrimitive.Item>
