<script lang="ts">
import {
  type DrawerContentProps,
  Drawer as DrawerPrimitive,
} from "@ark-ui/svelte/drawer";
import { Portal } from "@ark-ui/svelte/portal";
import type { DrawerProps as BaseDrawerProps } from "@pisagor/props";
import { cn } from "@pisagor/utils";
import { useDrawer } from "./drawer.context";
import DrawerBackdrop from "./drawer-backdrop.svelte";
import DrawerGrabber from "./drawer-grabber.svelte";
import DrawerPositioner from "./drawer-positioner.svelte";

type Props = DrawerContentProps & BaseDrawerProps;

const SWIPE_DIRECTION_TO_PLACEMENT = {
  down: "down",
  end: "right",
  start: "left",
  up: "up",
} as const;

let {
  variant = "default",
  children: contentChildren,
  class: className,
  ...rest
}: Props = $props();
const { slots } = useDrawer();
</script>

<Portal>
  <DrawerBackdrop />
  <DrawerPrimitive.Context>
    {#snippet children(
      api,
    )}
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
