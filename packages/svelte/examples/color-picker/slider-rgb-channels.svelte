<script lang="ts">
import { ColorPicker } from "@pisagor/svelte";
</script>

<ColorPicker>
  <ColorPicker.View format="rgba">
    <div class="flex w-full flex-col gap-2">
      <ColorPicker.ChannelSlider channel="red" />
      <ColorPicker.ChannelSlider channel="green" />
      <ColorPicker.ChannelSlider channel="blue" />
    </div>
  </ColorPicker.View>
</ColorPicker>
