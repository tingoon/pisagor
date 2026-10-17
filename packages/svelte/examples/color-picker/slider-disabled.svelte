<script module lang="ts">
  import source from "./slider-disabled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { ColorPicker } from "@pisagor/svelte";
</script>

<ColorPicker>
  <ColorPicker.View format="hsla">
    <ColorPicker.ChannelSlider channel="hue" />
  </ColorPicker.View>
</ColorPicker>
