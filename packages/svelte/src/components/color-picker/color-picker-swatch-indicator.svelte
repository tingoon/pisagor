<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerSwatchIndicatorProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  let { children, ...rest }: ColorPickerSwatchIndicatorProps = $props();
  const part = withContext(() => rest, { name: "SwatchIndicator" });
</script>

<ColorPickerPrimitive.SwatchIndicator {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.SwatchIndicator>
