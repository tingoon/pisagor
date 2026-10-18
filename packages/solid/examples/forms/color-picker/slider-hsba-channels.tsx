import { ColorPicker } from "@pisagor/solid";

export function SliderHsbaChannels() {
  return (
    <ColorPicker>
      <ColorPicker.View format="hsba">
        <div class="flex w-full flex-col gap-2">
          <ColorPicker.ChannelSlider channel="hue" />
          <ColorPicker.ChannelSlider channel="saturation" />
          <ColorPicker.ChannelSlider channel="brightness" />
        </div>
      </ColorPicker.View>
    </ColorPicker>
  );
}
