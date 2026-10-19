<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerChannelSliderValueTextProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  let { children, ...rest }: ColorPickerChannelSliderValueTextProps = $props();
  const part = withContext(() => rest, {
    name: "ChannelSliderValueText",
    slot: "valueText",
  });
</script>

<ColorPickerPrimitive.ChannelSliderValueText {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.ChannelSliderValueText>
