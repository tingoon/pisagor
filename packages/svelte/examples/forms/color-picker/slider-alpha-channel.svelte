<script lang="ts">
  import { ColorPicker } from "@pisagor/svelte";
</script>

<ColorPicker.Root>
  <ColorPicker.View format="rgba">
    <ColorPicker.ChannelSlider channel="alpha">
      <ColorPicker.TransparencyGrid />
      <ColorPicker.ChannelSliderTrack />
      <ColorPicker.ChannelSliderThumb />
    </ColorPicker.ChannelSlider>
  </ColorPicker.View>
</ColorPicker.Root>
