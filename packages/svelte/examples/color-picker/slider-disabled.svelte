<script lang="ts">
import { ColorPicker } from "@pisagor/svelte";
</script>

<ColorPicker>
  <ColorPicker.View format="hsla">
    <ColorPicker.ChannelSlider channel="hue" />
  </ColorPicker.View>
</ColorPicker>
