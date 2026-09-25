<script lang="ts">
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import EyedropperIcon from "phosphor-svelte/lib/EyedropperIcon";
import { useColorPicker } from "./color-picker.context";
import ColorPickerChannelSlider from "./color-picker-channel-slider.svelte";
import ColorPickerEyeDropperTrigger from "./color-picker-eye-dropper-trigger.svelte";
import ColorPickerView from "./color-picker-view.svelte";

const { slots } = useColorPicker();
</script>

<ColorPickerView format="hsla">
  <div class={slots.channelRow()}>
    <ColorPickerChannelSlider channel="hue" />
    <ColorPickerChannelSlider channel="alpha" />
    <ColorPickerEyeDropperTrigger
      aria-label="Eye dropper"
      class={cn(buttonRecipe({ size: "icon-sm", variant: "outline" }).base())}
      type="button"
    >
      <EyedropperIcon />
    </ColorPickerEyeDropperTrigger>
  </div>
</ColorPickerView>
