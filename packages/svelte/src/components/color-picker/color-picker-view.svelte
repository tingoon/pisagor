<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerViewProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  let { children, ...rest }: ColorPickerViewProps = $props();
  const part = withContext(() => rest, { name: "View" });
</script>

<ColorPickerPrimitive.View {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.View>
