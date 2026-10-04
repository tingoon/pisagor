<script lang="ts">
import { ColorPicker } from "@pisagor/svelte";
</script>

<ColorPicker>
  <ColorPicker.View format="hsba">
    <div class="flex w-full flex-col gap-2">
      <ColorPicker.ChannelSlider channel="hue" />
      <ColorPicker.ChannelSlider channel="saturation" />
      <ColorPicker.ChannelSlider channel="brightness" />
    </div>
  </ColorPicker.View>
</ColorPicker>
