<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerTransparencyGridProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  let { children, ...rest }: ColorPickerTransparencyGridProps = $props();
  const part = withContext(() => rest, { name: "TransparencyGrid" });
</script>

<ColorPickerPrimitive.TransparencyGrid {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.TransparencyGrid>
