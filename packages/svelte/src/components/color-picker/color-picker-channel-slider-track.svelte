<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerChannelSliderTrackProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./color-picker.context";

  let { children, ...rest }: ColorPickerChannelSliderTrackProps = $props();
  const part = withContext(() => rest, { name: "ChannelSliderTrack" });
</script>

<ColorPickerPrimitive.ChannelSliderTrack {...part.props}>
  {@render children?.()}
</ColorPickerPrimitive.ChannelSliderTrack>
