<script lang="ts">
  import { ColorPicker } from "@pisagor/svelte";

  let color = $state("rgba(82, 65, 235, 1)");
</script>

<div class="flex flex-col gap-2">
  <ColorPicker.Root
    class="w-full"
    format="hsla"
    inline
    onValueChange={(v) => (color = v)}
    value={color}
  >
    <ColorPicker.View format="hsla">
      <ColorPicker.ChannelSlider channel="hue">
        <ColorPicker.ChannelSliderTrack />
        <ColorPicker.ChannelSliderThumb />
      </ColorPicker.ChannelSlider>
    </ColorPicker.View>
  </ColorPicker.Root>
  <p class="text-muted-foreground text-center text-sm">{color}</p>
</div>
