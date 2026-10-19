<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerValueTextProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  let { children, ...rest }: ColorPickerValueTextProps = $props();
  const part = withContext(() => rest, { name: "ValueText" });
</script>

<ColorPickerPrimitive.ValueText {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.ValueText>
