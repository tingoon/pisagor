<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerContentProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  let { children, ...rest }: ColorPickerContentProps = $props();
  const part = withContext(() => rest, { name: "Content" });
</script>

<ColorPickerPrimitive.Content {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.Content>
