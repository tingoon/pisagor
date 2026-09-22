import { InputGroup } from "@pisagor/react";
import { ColorPicker } from "..";
export function Default() {
  return (
    <ColorPicker>
      <ColorPicker.Control>
        <InputGroup>
          <ColorPicker.Trigger asChild>
            <InputGroup.Addon>
              <ColorPicker.SwatchPreview />
            </InputGroup.Addon>
          </ColorPicker.Trigger>
          <ColorPicker.Input asChild>
            <InputGroup.Input />
          </ColorPicker.Input>
        </InputGroup>
      </ColorPicker.Control>
      <ColorPicker.Content>
        <ColorPicker.Area>
          <ColorPicker.AreaThumb />
        </ColorPicker.Area>
        <ColorPicker.View format="hsla">
          <div className="flex items-center gap-3">
            <ColorPicker.EyeDropperTrigger />
            <div className="flex flex-1 flex-col gap-2.5">
              <ColorPicker.ChannelSlider channel="hue" />
              <ColorPicker.ChannelSlider channel="alpha">
                <ColorPicker.TransparencyGrid />
              </ColorPicker.ChannelSlider>
            </div>
          </div>
        </ColorPicker.View>
      </ColorPicker.Content>
    </ColorPicker>
  );
}
