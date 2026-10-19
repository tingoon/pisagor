<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerAreaThumbProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  let { children, ...rest }: ColorPickerAreaThumbProps = $props();
  const part = withContext(() => rest, { name: "AreaThumb" });
</script>

<ColorPickerPrimitive.AreaThumb {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.AreaThumb>
