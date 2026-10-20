import { Portal } from "solid-js/web";
import { Button, ColorPicker, Input } from "@pisagor/solid";

export function PopoverWithChannelEditing() {
  return (
    <ColorPicker.Root format="rgba">
      <ColorPicker.Control>
        <ColorPicker.Trigger
          asChild={(props) => (
            <Button {...props()} size="lg" variant="ghost">
              <ColorPicker.SwatchPreview class="size-6" />
              Pick a color
            </Button>
          )}
        />
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
            <div class="grid grid-cols-3 gap-2">
              <ColorPicker.Input
                channel="red"
                asChild={(props) => <Input {...props()} />}
              />
              <ColorPicker.Input
                channel="green"
                asChild={(props) => <Input {...props()} />}
              />
              <ColorPicker.Input
                channel="blue"
                asChild={(props) => <Input {...props()} />}
              />
            </div>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </ColorPicker.Root>
  );
}
