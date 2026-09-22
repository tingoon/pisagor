import { Button, Input } from "@pisagor/react";
import { ColorPicker } from "..";
export function PopoverWithChannelEditing() {
  return (
    <ColorPicker format="rgba">
      <ColorPicker.Control>
        <ColorPicker.Trigger asChild>
          <Button size="lg" variant="ghost">
            <ColorPicker.SwatchPreview className="size-6" />
            Pick a color
          </Button>
        </ColorPicker.Trigger>
      </ColorPicker.Control>
      <ColorPicker.Content>
        <ColorPicker.Area>
          <ColorPicker.AreaThumb />
        </ColorPicker.Area>
        <ColorPicker.ChannelSlider channel="hue" />
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
    </ColorPicker>
  );
}
