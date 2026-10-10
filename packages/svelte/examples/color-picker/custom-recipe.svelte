<script lang="ts">
import { colorPickerRecipe } from "@pisagor/recipes";
import { ColorPicker, InputGroup } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandColorPickerRecipe = tv({
  extend: colorPickerRecipe,
  slots: { content: "border-emerald-500/40" },
  variants: {},
});
</script>

<ColorPicker recipe={brandColorPickerRecipe}>
  <ColorPicker.Control>
    <InputGroup>
      <ColorPicker.Trigger>
        <InputGroup.Addon>
          <ColorPicker.SwatchPreview />
        </InputGroup.Addon>
      </ColorPicker.Trigger>
      <ColorPicker.Input channel="hex">
        {#snippet asChild(
          props,
        )}
          <InputGroup.Input {...props()} clearable={false} />
        {/snippet}
      </ColorPicker.Input>
    </InputGroup>
  </ColorPicker.Control>
  <ColorPicker.Content>
    <ColorPicker.Area>
      <ColorPicker.AreaThumb />
    </ColorPicker.Area>
    <ColorPicker.View format="hsla">
      <div class="flex items-center gap-3">
        <ColorPicker.EyeDropperTrigger />
        <div class="flex flex-1 flex-col gap-2.5">
          <ColorPicker.ChannelSlider channel="hue" />
          <ColorPicker.ChannelSlider channel="alpha">
            <ColorPicker.TransparencyGrid />
          </ColorPicker.ChannelSlider>
        </div>
      </div>
    </ColorPicker.View>
  </ColorPicker.Content>
</ColorPicker>
