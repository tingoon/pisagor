<script lang="ts">
  import { ColorPicker } from "@pisagor/svelte";
</script>

<ColorPicker.Root>
  <ColorPicker.View format="hsla">
    <div class="flex flex-col gap-2">
      <ColorPicker.ChannelSlider channel="hue" orientation="vertical">
        <ColorPicker.ChannelSliderTrack />
        <ColorPicker.ChannelSliderThumb />
      </ColorPicker.ChannelSlider>
    </div>
  </ColorPicker.View>
</ColorPicker.Root>
