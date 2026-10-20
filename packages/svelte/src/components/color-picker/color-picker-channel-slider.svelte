<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerChannelSliderProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  let { children, ...rest }: ColorPickerChannelSliderProps = $props();
  const part = withContext(() => rest, { name: "ChannelSlider" });
</script>

<ColorPickerPrimitive.ChannelSlider {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.ChannelSlider>
