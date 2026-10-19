import { Portal } from "solid-js/web";
import { EyedropperIcon } from "@squidlab/phosphor-solid/icons";
import { Button, ColorPicker, InputGroup } from "@pisagor/solid";
import { colorPickerRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandColorPickerRecipe = tv({
  extend: colorPickerRecipe,
  slots: { content: "border-emerald-500/40" },
  variants: {},
});

export function CustomRecipe() {
  return (
    <ColorPicker.Root recipe={brandColorPickerRecipe}>
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
