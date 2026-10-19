<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerSwatchGroupProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  let { children, ...rest }: ColorPickerSwatchGroupProps = $props();
  const part = withContext(() => rest, { name: "SwatchGroup" });
</script>

<ColorPickerPrimitive.SwatchGroup {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.SwatchGroup>
