<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerLabelProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  let { children, ...rest }: ColorPickerLabelProps = $props();
  const part = withContext(() => rest, { name: "Label" });
</script>

<ColorPickerPrimitive.Label {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.Label>
