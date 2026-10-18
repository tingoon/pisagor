import { ColorPicker } from "@pisagor/solid";

export function SliderRgbChannels() {
  return (
    <ColorPicker>
      <ColorPicker.View format="rgba">
        <div class="flex w-full flex-col gap-2">
          <ColorPicker.ChannelSlider channel="red" />
          <ColorPicker.ChannelSlider channel="green" />
          <ColorPicker.ChannelSlider channel="blue" />
        </div>
      </ColorPicker.View>
    </ColorPicker>
  );
}
