<script lang="ts">
  import {
    Dialog as DialogPrimitive,
    type DialogPositionerProps,
  } from "@ark-ui/svelte";
  import type { SheetRootContract } from "@pisagor/props";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./sheet.context";

  type Props = DialogPositionerProps & SheetRootContract;

  let {
    placement,
    variant = "default",
    class: className,
    children,
    ...rest
  }: Props = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<DialogPrimitive.Positioner
  {...rest}
  class={slots.positioner({ class: cn(className), placement, variant })}
>
  {@render children?.()}
</DialogPrimitive.Positioner>
