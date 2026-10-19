<script lang="ts">
  import { ColorPicker } from "@pisagor/svelte";
</script>

<ColorPicker.Root>
  <ColorPicker.View format="hsla">
    <ColorPicker.ChannelSlider channel="hue">
      <ColorPicker.ChannelSliderTrack />
      <ColorPicker.ChannelSliderThumb />
    </ColorPicker.ChannelSlider>
  </ColorPicker.View>
</ColorPicker.Root>
