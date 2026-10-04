<script lang="ts">
import { ColorPicker } from "@pisagor/svelte";
</script>

<ColorPicker>
  <ColorPicker.View format="hsla">
    <div class="flex flex-col gap-2">
      <ColorPicker.ChannelSlider channel="hue" orientation="vertical" />
    </div>
  </ColorPicker.View>
</ColorPicker>
