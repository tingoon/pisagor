<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerSwatchProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./color-picker.context";

  let {
    class: className,
    children,
    ...rest
  }: ColorPickerSwatchProps = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<ColorPickerPrimitive.Swatch
  {...rest}
  class={slots.swatch({ class: cn(className) })}
>
  {@render children?.()}
</ColorPickerPrimitive.Swatch>
