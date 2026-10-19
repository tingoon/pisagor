import { Portal } from "@ark-ui/react";
import { EyedropperIcon } from "@phosphor-icons/react";
import { Button, ColorPicker, InputGroup } from "@pisagor/react";

export function CustomSpacing() {
  return (
    <ColorPicker.Root defaultValue="#eb5e41" format="hsla">
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
      <Portal>
        <ColorPicker.Positioner>
          <ColorPicker.Content className="[--space:--spacing(2)] sm:[--space:--spacing(4)]">
            <ColorPicker.Area>
              <ColorPicker.AreaBackground />
              <ColorPicker.AreaThumb />
            </ColorPicker.Area>
            <ColorPicker.View format="hsla">
              <div className="flex items-center gap-3">
                <ColorPicker.EyeDropperTrigger asChild>
                  <Button size="icon-md" variant="outline">
                    <EyedropperIcon />
                  </Button>
                </ColorPicker.EyeDropperTrigger>
                <div className="flex flex-1 flex-col gap-2.5">
                  <ColorPicker.ChannelSlider channel="hue">
                    <ColorPicker.ChannelSliderTrack />
                    <ColorPicker.ChannelSliderThumb />
                  </ColorPicker.ChannelSlider>
                  <ColorPicker.ChannelSlider channel="alpha">
                    <ColorPicker.TransparencyGrid />
                    <ColorPicker.ChannelSliderTrack />
                    <ColorPicker.ChannelSliderThumb />
                  </ColorPicker.ChannelSlider>
                </div>
              </div>
            </ColorPicker.View>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </ColorPicker.Root>
  );
}
