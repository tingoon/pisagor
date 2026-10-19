import { Portal } from "@ark-ui/react";
import { EyedropperIcon } from "@phosphor-icons/react";
import { Button, ColorPicker, InputGroup } from "@pisagor/react";
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
          <ColorPicker.Content>
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
