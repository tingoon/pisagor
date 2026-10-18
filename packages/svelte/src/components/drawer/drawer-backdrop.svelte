<script lang="ts">
  import {
    Drawer as DrawerPrimitive,
    type DrawerBackdropProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./drawer.context";

  let { class: className, ...rest }: DrawerBackdropProps = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<DrawerPrimitive.Backdrop
  {...rest}
  class={slots.backdrop({ class: cn(className) })}
/>
