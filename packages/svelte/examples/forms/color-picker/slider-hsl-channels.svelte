<script lang="ts">
  import { ColorPicker } from "@pisagor/svelte";
</script>

<ColorPicker.Root>
  <ColorPicker.View format="hsla">
    <div class="flex w-full flex-col gap-2">
      <ColorPicker.ChannelSlider channel="hue">
        <ColorPicker.ChannelSliderTrack />
        <ColorPicker.ChannelSliderThumb />
      </ColorPicker.ChannelSlider>
      <ColorPicker.ChannelSlider channel="saturation">
        <ColorPicker.ChannelSliderTrack />
        <ColorPicker.ChannelSliderThumb />
      </ColorPicker.ChannelSlider>
      <ColorPicker.ChannelSlider channel="lightness">
        <ColorPicker.ChannelSliderTrack />
        <ColorPicker.ChannelSliderThumb />
      </ColorPicker.ChannelSlider>
    </div>
  </ColorPicker.View>
</ColorPicker.Root>
