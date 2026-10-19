<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
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

<ColorPicker.Root format="hsla" value="#eb5e41">
  <ColorPicker.Control>
    <ColorPicker.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} size="lg" variant="ghost">
          <ColorPicker.SwatchPreview class="size-6" />
          Pick a color
        </Button>
      {/snippet}
    </ColorPicker.Trigger>
  </ColorPicker.Control>
  <Portal>
    <ColorPicker.Positioner>
      <ColorPicker.Content>
        <ColorPicker.Area>
          <ColorPicker.AreaBackground />
          <ColorPicker.AreaThumb />
        </ColorPicker.Area>
        <ColorPicker.View format="hsla">
          <ColorPicker.ChannelSlider channel="hue">
            <ColorPicker.ChannelSliderTrack />
            <ColorPicker.ChannelSliderThumb />
          </ColorPicker.ChannelSlider>
        </ColorPicker.View>
        <ColorPicker.SwatchGroup>
          {#each swatches as color}
            <ColorPicker.SwatchTrigger class="size-4" value={color}>
              <ColorPicker.Swatch value={color} />
            </ColorPicker.SwatchTrigger>
          {/each}
        </ColorPicker.SwatchGroup>
      </ColorPicker.Content>
    </ColorPicker.Positioner>
  </Portal>
</ColorPicker.Root>
