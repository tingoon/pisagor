<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerChannelSliderThumbProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  let { children, ...rest }: ColorPickerChannelSliderThumbProps = $props();
  const part = withContext(() => rest, { name: "ChannelSliderThumb" });
</script>

<ColorPickerPrimitive.ChannelSliderThumb {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.ChannelSliderThumb>
