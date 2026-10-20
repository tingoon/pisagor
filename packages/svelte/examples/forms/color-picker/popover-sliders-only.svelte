<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { Button, ColorPicker, Field } from "@pisagor/svelte";
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
        <ColorPicker.View format="hsla">
          <div class="flex flex-col gap-2">
            <Field>
              <Field.Label>Hue</Field.Label>
              <ColorPicker.ChannelSlider channel="hue">
                <ColorPicker.ChannelSliderTrack />
                <ColorPicker.ChannelSliderThumb />
              </ColorPicker.ChannelSlider>
            </Field>
            <Field>
              <Field.Label>Saturation</Field.Label>
              <ColorPicker.ChannelSlider channel="saturation">
                <ColorPicker.ChannelSliderTrack />
                <ColorPicker.ChannelSliderThumb />
              </ColorPicker.ChannelSlider>
            </Field>
            <Field>
              <Field.Label>Lightness</Field.Label>
              <ColorPicker.ChannelSlider channel="lightness">
                <ColorPicker.ChannelSliderTrack />
                <ColorPicker.ChannelSliderThumb />
              </ColorPicker.ChannelSlider>
            </Field>
            <Field>
              <Field.Label>Alpha</Field.Label>
              <ColorPicker.ChannelSlider channel="alpha">
                <ColorPicker.TransparencyGrid />
                <ColorPicker.ChannelSliderTrack />
                <ColorPicker.ChannelSliderThumb />
              </ColorPicker.ChannelSlider>
            </Field>
          </div>
        </ColorPicker.View>
      </ColorPicker.Content>
    </ColorPicker.Positioner>
  </Portal>
</ColorPicker.Root>
