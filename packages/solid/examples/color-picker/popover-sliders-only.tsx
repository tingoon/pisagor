/** @jsxImportSource solid-js */
import { Button, Field } from "@pisagor/solid";
import { ColorPicker } from "@pisagor/solid/color-picker";
export function PopoverSlidersOnly() {
  return (
    <ColorPicker defaultValue="#eb5e41" format="hsla">
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
        <ColorPicker.View format="hsla">
          <div class="flex flex-col gap-2">
            <Field>
              <Field.Label>Hue</Field.Label>
              <ColorPicker.ChannelSlider channel="hue" />
            </Field>
            <Field>
              <Field.Label>Saturation</Field.Label>
              <ColorPicker.ChannelSlider channel="saturation" />
            </Field>
            <Field>
              <Field.Label>Lightness</Field.Label>
              <ColorPicker.ChannelSlider channel="lightness" />
            </Field>
            <Field>
              <Field.Label>Alpha</Field.Label>
              <ColorPicker.ChannelSlider channel="alpha">
                <ColorPicker.TransparencyGrid />
              </ColorPicker.ChannelSlider>
            </Field>
          </div>
        </ColorPicker.View>
      </ColorPicker.Content>
    </ColorPicker>
  );
}
