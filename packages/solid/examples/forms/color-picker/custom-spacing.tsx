import { Portal } from "solid-js/web";
import { EyedropperIcon } from "@squidlab/phosphor-solid/icons";
import { Button, ColorPicker, InputGroup } from "@pisagor/solid";

export function CustomSpacing() {
  return (
    <ColorPicker.Root defaultValue="#eb5e41" format="hsla">
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
          <ColorPicker.Content class="[--space:--spacing(2)] sm:[--space:--spacing(4)]">
            <ColorPicker.Area>
              <ColorPicker.AreaBackground />
              <ColorPicker.AreaThumb />
            </ColorPicker.Area>
            <ColorPicker.View format="hsla">
              <div class="flex items-center gap-3">
                <ColorPicker.EyeDropperTrigger
                  asChild={(props) => (
                    <Button {...props()} size="icon-md" variant="outline">
                      <EyedropperIcon />
                    </Button>
                  )}
                />
                <div class="flex flex-1 flex-col gap-2.5">
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
