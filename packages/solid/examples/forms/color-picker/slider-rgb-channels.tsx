import { ColorPicker } from "@pisagor/solid";

export function SliderRgbChannels() {
  return (
    <ColorPicker.Root>
      <ColorPicker.View format="rgba">
        <div class="flex w-full flex-col gap-2">
          <ColorPicker.ChannelSlider channel="red">
            <ColorPicker.ChannelSliderTrack />
            <ColorPicker.ChannelSliderThumb />
          </ColorPicker.ChannelSlider>
          <ColorPicker.ChannelSlider channel="green">
            <ColorPicker.ChannelSliderTrack />
            <ColorPicker.ChannelSliderThumb />
          </ColorPicker.ChannelSlider>
          <ColorPicker.ChannelSlider channel="blue">
            <ColorPicker.ChannelSliderTrack />
            <ColorPicker.ChannelSliderThumb />
          </ColorPicker.ChannelSlider>
        </div>
      </ColorPicker.View>
    </ColorPicker.Root>
  );
}
