<script lang="ts">
  import {
    ColorPicker as ColorPickerPrimitive,
    type ColorPickerChannelSliderProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useColorPicker } from "./color-picker.context";

  let {
    children,
    class: className,
    ...rest
  }: ColorPickerChannelSliderProps = $props();
  const styles = useColorPicker();
  const slots = $derived(styles.slots);
</script>

<ColorPickerPrimitive.ChannelSlider
  {...rest}
  class={slots.channelSlider({ class: cn(className) })}
>
  {@render children?.()}
  <ColorPickerPrimitive.ChannelSliderTrack class={slots.channelSliderTrack()} />
  <ColorPickerPrimitive.ChannelSliderThumb class={slots.channelSliderThumb()} />
</ColorPickerPrimitive.ChannelSlider>
