import { Portal } from "solid-js/web";
import { ColorPicker, InputGroup } from "@pisagor/solid";

export function Invalid() {
  return (
    <ColorPicker.Root defaultValue="#eb5e41" invalid>
      <ColorPicker.Control>
        <InputGroup>
          <ColorPicker.Trigger
            asChild={(props) => (
              <InputGroup.Addon {...props()}>
                <ColorPicker.SwatchPreview />
              </InputGroup.Addon>
            )}
          />
          <ColorPicker.Input
            asChild={(props) => <InputGroup.Input {...props()} />}
          />
        </InputGroup>
      </ColorPicker.Control>
      <Portal>
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            <ColorPicker.Area>
              <ColorPicker.AreaBackground />
              <ColorPicker.AreaThumb />
            </ColorPicker.Area>
            <ColorPicker.View format="hsla">
              <ColorPicker.ChannelSlider channel="hue">
                <ColorPicker.ChannelSliderTrack />
                <ColorPicker.ChannelSliderThumb />
              </ColorPicker.ChannelSlider>
            </ColorPicker.View>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </ColorPicker.Root>
  );
}
