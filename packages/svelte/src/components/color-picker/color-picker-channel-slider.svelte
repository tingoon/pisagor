<script lang="ts">
import {
  type ColorPickerChannelSliderProps,
  ColorPicker as ColorPickerPrimitive,
} from "@ark-ui/svelte/color-picker";
import { cn } from "@pisagor/utils";
import { useColorPicker } from "./color-picker.context";

let {
  children,
  class: className,
  ...rest
}: ColorPickerChannelSliderProps = $props();
const { slots } = useColorPicker();
</script>

<ColorPickerPrimitive.ChannelSlider
  {...rest}
  class={slots.channelSlider({ class: cn(className) })}
>
  {@render children?.()}
  <ColorPickerPrimitive.ChannelSliderTrack class={slots.channelSliderTrack()} />
  <ColorPickerPrimitive.ChannelSliderThumb class={slots.channelSliderThumb()} />
</ColorPickerPrimitive.ChannelSlider>
