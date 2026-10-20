import { Portal } from "@ark-ui/react";
import { Button, ColorPicker, Input } from "@pisagor/react";

export function PopoverWithChannelEditing() {
  return (
    <ColorPicker.Root format="rgba">
      <ColorPicker.Control>
        <ColorPicker.Trigger asChild>
          <Button size="lg" variant="ghost">
            <ColorPicker.SwatchPreview className="size-6" />
            Pick a color
          </Button>
        </ColorPicker.Trigger>
      </ColorPicker.Control>
      <Portal>
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            <ColorPicker.Area>
              <ColorPicker.AreaBackground />
              <ColorPicker.AreaThumb />
            </ColorPicker.Area>
            <ColorPicker.ChannelSlider channel="hue">
              <ColorPicker.ChannelSliderTrack />
              <ColorPicker.ChannelSliderThumb />
            </ColorPicker.ChannelSlider>
            <div className="grid grid-cols-3 gap-2">
              <ColorPicker.Input asChild channel="red">
                <Input />
              </ColorPicker.Input>
              <ColorPicker.Input asChild channel="green">
                <Input />
              </ColorPicker.Input>
              <ColorPicker.Input asChild channel="blue">
                <Input />
              </ColorPicker.Input>
            </div>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </ColorPicker.Root>
  );
}
