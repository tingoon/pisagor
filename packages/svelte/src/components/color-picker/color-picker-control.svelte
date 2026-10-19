<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerControlProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  let { children, ...rest }: ColorPickerControlProps = $props();
  const part = withContext(() => rest, { name: "Control" });
</script>

<ColorPickerPrimitive.Control {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.Control>
