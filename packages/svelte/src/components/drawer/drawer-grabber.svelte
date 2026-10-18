<script lang="ts">
  import {
    Drawer as DrawerPrimitive,
    type DrawerGrabberProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./drawer.context";

  let { class: className, ...rest }: DrawerGrabberProps = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<div class={slots.grabberWrapper()}>
  <DrawerPrimitive.Grabber
    {...rest}
    class={slots.grabber({ class: cn(className) })}
  >
    <DrawerPrimitive.GrabberIndicator class={slots.grabberIcon()} />
  </DrawerPrimitive.Grabber>
</div>
