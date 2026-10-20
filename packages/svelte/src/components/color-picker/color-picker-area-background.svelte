<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerAreaBackgroundProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  let { children, ...rest }: ColorPickerAreaBackgroundProps = $props();
  const part = withContext(() => rest, { name: "AreaBackground" });
</script>

<ColorPickerPrimitive.AreaBackground {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.AreaBackground>
