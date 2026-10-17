<script module lang="ts">
  import source from "./slider-alpha-channel.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { ColorPicker } from "@pisagor/svelte";
</script>

<ColorPicker>
  <ColorPicker.View format="rgba">
    <ColorPicker.ChannelSlider channel="alpha">
      <ColorPicker.TransparencyGrid />
    </ColorPicker.ChannelSlider>
  </ColorPicker.View>
</ColorPicker>
