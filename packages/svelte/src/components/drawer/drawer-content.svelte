<script lang="ts">
  import {
    Drawer as DrawerPrimitive,
    type DrawerContentProps,
    Portal,
  } from "@ark-ui/svelte";
  import type { DrawerProps as BaseDrawerProps } from "@pisagor/props";
  import { cn } from "@pisagor/utils";
  import { useDrawer } from "./drawer.context";
  import DrawerBackdrop from "./drawer-backdrop.svelte";
  import DrawerGrabber from "./drawer-grabber.svelte";
  import DrawerPositioner from "./drawer-positioner.svelte";

  type Props = DrawerContentProps & BaseDrawerProps;

  const SWIPE_DIRECTION_TO_PLACEMENT = {
    down: "bottom",
    end: "right",
    start: "left",
    up: "top",
  } as const;

  let {
    variant = "default",
    children: contentChildren,
    class: className,
    ...rest
  }: Props = $props();
  const styles = useDrawer();
  const slots = $derived(styles.slots);
</script>

<Portal>
  <DrawerBackdrop />
  <DrawerPrimitive.Context>
    {#snippet children(api)}
      {const swipeDirection = api().swipeDirection}
      <DrawerPositioner {variant}>
        <DrawerPrimitive.Content
          {...rest}
          class={slots.content({
            class: cn(className),
            placement: SWIPE_DIRECTION_TO_PLACEMENT[swipeDirection],
            variant,
          })}
        >
          <DrawerGrabber />
          {@render contentChildren?.()}
        </DrawerPrimitive.Content>
      </DrawerPositioner>
    {/snippet}
  </DrawerPrimitive.Context>
</Portal>
