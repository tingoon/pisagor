import { InputGroup } from "@pisagor/react";
import { ColorPicker } from "..";
export function Invalid() {
  return (
    <ColorPicker defaultValue="#eb5e41" invalid>
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
          <ColorPicker.ChannelSlider channel="hue" />
        </ColorPicker.View>
      </ColorPicker.Content>
    </ColorPicker>
  );
}
