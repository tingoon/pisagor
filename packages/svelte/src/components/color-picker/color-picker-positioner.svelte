<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerPositionerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  let { children, ...rest }: ColorPickerPositionerProps = $props();
  const part = withContext(() => rest, { name: "Positioner" });
</script>

<ColorPickerPrimitive.Positioner {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.Positioner>
