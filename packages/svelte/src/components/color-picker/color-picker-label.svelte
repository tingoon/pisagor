<script lang="ts">
  import { ColorPicker as ColorPickerPrimitive } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import type { ComponentProps } from "svelte";
  import { useStyles } from "./color-picker.context";

  let {
    class: className,
    ...rest
  }: ComponentProps<typeof ColorPickerPrimitive.Label> = $props();
  const styles = useStyles();
</script>

<ColorPickerPrimitive.Label
  {...rest}
  class={styles.slots.label({ class: cn(className) })}
/>
