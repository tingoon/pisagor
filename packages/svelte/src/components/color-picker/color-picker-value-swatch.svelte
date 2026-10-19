<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerValueSwatchProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  let { children, ...rest }: ColorPickerValueSwatchProps = $props();
  const part = withContext(() => rest, { name: "ValueSwatch" });
</script>

<ColorPickerPrimitive.ValueSwatch {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.ValueSwatch>
