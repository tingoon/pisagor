<script lang="ts">
import { Button, ColorPicker } from "@pisagor/svelte";

const swatches = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#f43f5e",
];
</script>

<ColorPicker format="hsla" value="#eb5e41">
  <ColorPicker.Control>
    <ColorPicker.Trigger>
      <Button size="lg" variant="ghost">
        <ColorPicker.SwatchPreview class="size-6" />
        Pick a color
      </Button>
    </ColorPicker.Trigger>
  </ColorPicker.Control>
  <ColorPicker.Content>
    <ColorPicker.Area>
      <ColorPicker.AreaThumb />
    </ColorPicker.Area>
    <ColorPicker.View format="hsla">
      <ColorPicker.ChannelSlider channel="hue" />
    </ColorPicker.View>
    <ColorPicker.SwatchGroup>
      {#each swatches as color}
        <ColorPicker.SwatchTrigger class="size-4" value={color}>
          <ColorPicker.Swatch value={color} />
        </ColorPicker.SwatchTrigger>
      {/each}
    </ColorPicker.SwatchGroup>
  </ColorPicker.Content>
</ColorPicker>
