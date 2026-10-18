<script lang="ts">
  import {
    Marquee as MarqueePrimitive,
    type MarqueeContentProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useMarquee } from "./marquee.context";

  let { class: className, children, ...rest }: MarqueeContentProps = $props();
  const styles = useMarquee();
  const slots = $derived(styles.slots);
</script>

<MarqueePrimitive.Viewport class={slots.viewport()}>
  <MarqueePrimitive.Content
    {...rest}
    class={slots.content({ class: cn(className) })}
  >
    {@render children?.()}
  </MarqueePrimitive.Content>
</MarqueePrimitive.Viewport>
