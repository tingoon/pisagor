<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerChannelSliderLabelProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  let { children, ...rest }: ColorPickerChannelSliderLabelProps = $props();
  const part = withContext(() => rest, {
    name: "ChannelSliderLabel",
    slot: "label",
  });
</script>

<ColorPickerPrimitive.ChannelSliderLabel {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.ChannelSliderLabel>
