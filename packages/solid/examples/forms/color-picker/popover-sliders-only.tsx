import { Portal } from "solid-js/web";
import { Button, ColorPicker, Field } from "@pisagor/solid";

export function PopoverSlidersOnly() {
  return (
    <ColorPicker.Root defaultValue="#eb5e41" format="hsla">
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
            <ColorPicker.View format="hsla">
              <div class="flex flex-col gap-2">
                <Field>
                  <Field.Label>Hue</Field.Label>
                  <ColorPicker.ChannelSlider channel="hue">
                    <ColorPicker.ChannelSliderTrack />
                    <ColorPicker.ChannelSliderThumb />
                  </ColorPicker.ChannelSlider>
                </Field>
                <Field>
                  <Field.Label>Saturation</Field.Label>
                  <ColorPicker.ChannelSlider channel="saturation">
                    <ColorPicker.ChannelSliderTrack />
                    <ColorPicker.ChannelSliderThumb />
                  </ColorPicker.ChannelSlider>
                </Field>
                <Field>
                  <Field.Label>Lightness</Field.Label>
                  <ColorPicker.ChannelSlider channel="lightness">
                    <ColorPicker.ChannelSliderTrack />
                    <ColorPicker.ChannelSliderThumb />
                  </ColorPicker.ChannelSlider>
                </Field>
                <Field>
                  <Field.Label>Alpha</Field.Label>
                  <ColorPicker.ChannelSlider channel="alpha">
                    <ColorPicker.TransparencyGrid />
                    <ColorPicker.ChannelSliderTrack />
                    <ColorPicker.ChannelSliderThumb />
                  </ColorPicker.ChannelSlider>
                </Field>
              </div>
            </ColorPicker.View>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </ColorPicker.Root>
  );
}
