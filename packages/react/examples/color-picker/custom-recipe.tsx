import { ColorPicker, InputGroup } from "@pisagor/react";
import { colorPickerRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandColorPickerRecipe = tv({
  extend: colorPickerRecipe,
  slots: { content: "border-emerald-500/40" },
  variants: {},
});

export function CustomRecipe() {
  return (
    <ColorPicker recipe={brandColorPickerRecipe}>
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
      <ColorPicker.Content>
        <ColorPicker.Area>
          <ColorPicker.AreaThumb />
        </ColorPicker.Area>
        <ColorPicker.View format="hsla">
          <div className="flex items-center gap-3">
            <ColorPicker.EyeDropperTrigger />
            <div className="flex flex-1 flex-col gap-2.5">
              <ColorPicker.ChannelSlider channel="hue" />
              <ColorPicker.ChannelSlider channel="alpha">
                <ColorPicker.TransparencyGrid />
              </ColorPicker.ChannelSlider>
            </div>
          </div>
        </ColorPicker.View>
      </ColorPicker.Content>
    </ColorPicker>
  );
}
