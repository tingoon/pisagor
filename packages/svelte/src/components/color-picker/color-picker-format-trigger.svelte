<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerFormatTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  let { children, ...rest }: ColorPickerFormatTriggerProps = $props();
  const part = withContext(() => rest, { name: "FormatTrigger" });
</script>

<ColorPickerPrimitive.FormatTrigger {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.FormatTrigger>
