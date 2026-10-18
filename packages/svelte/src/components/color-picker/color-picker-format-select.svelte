<script lang="ts">
  import { ColorPicker as ColorPickerPrimitive } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import type { ComponentProps } from "svelte";
  import { useStyles } from "./color-picker.context";

  let {
    class: className,
    ...rest
  }: ComponentProps<typeof ColorPickerPrimitive.FormatSelect> = $props();
  const styles = useStyles();
</script>

<ColorPickerPrimitive.FormatSelect
  {...rest}
  class={styles.slots.formatSelect({ class: cn(className) })}
/>
