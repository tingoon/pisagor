/** @jsxImportSource solid-js */
import { Button, ColorPicker, Input } from "@pisagor/solid";
export function PopoverWithChannelEditing() {
  return (
    <ColorPicker format="rgba">
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
      <ColorPicker.Content>
        <ColorPicker.Area>
          <ColorPicker.AreaThumb />
        </ColorPicker.Area>
        <ColorPicker.ChannelSlider channel="hue" />
        <div class="grid grid-cols-3 gap-2">
          <ColorPicker.Input
            asChild={(props) => <Input {...props()} />}
            channel="red"
          />
          <ColorPicker.Input
            asChild={(props) => <Input {...props()} />}
            channel="green"
          />
          <ColorPicker.Input
            asChild={(props) => <Input {...props()} />}
            channel="blue"
          />
        </div>
      </ColorPicker.Content>
    </ColorPicker>
  );
}
