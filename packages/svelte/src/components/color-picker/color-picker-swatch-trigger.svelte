<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerSwatchTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  let { children, ...rest }: ColorPickerSwatchTriggerProps = $props();
  const part = withContext(() => rest, { name: "SwatchTrigger" });
</script>

<ColorPickerPrimitive.SwatchTrigger {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.SwatchTrigger>
