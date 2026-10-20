<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerSwatchProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  let { children, ...rest }: ColorPickerSwatchProps = $props();
  const part = withContext(() => rest, { name: "Swatch" });
</script>

<ColorPickerPrimitive.Swatch {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.Swatch>
