<script lang="ts">
  import { EyedropperIcon } from "phosphor-svelte";
  import { Portal } from "@ark-ui/svelte";
  import { Button, ColorPicker, InputGroup } from "@pisagor/svelte";
</script>

<ColorPicker.Root defaultValue="#eb5e41" format="hsla">
  <ColorPicker.Control>
    <InputGroup>
      <ColorPicker.Trigger>
        {#snippet asChild(props)}
          <InputGroup.Addon {...props()}>
            <ColorPicker.SwatchPreview />
          </InputGroup.Addon>
        {/snippet}
      </ColorPicker.Trigger>
      <ColorPicker.Input channel="hex">
        {#snippet asChild(props)}
          <InputGroup.Input {...props()} />
        {/snippet}
      </ColorPicker.Input>
    </InputGroup>
  </ColorPicker.Control>
  <Portal>
    <ColorPicker.Positioner>
      <ColorPicker.Content
        class="[--space:--spacing(2)] sm:[--space:--spacing(4)]"
      >
        <ColorPicker.Area>
          <ColorPicker.AreaBackground />
          <ColorPicker.AreaThumb />
        </ColorPicker.Area>
        <ColorPicker.View format="hsla">
          <div class="flex items-center gap-3">
            <ColorPicker.EyeDropperTrigger>
              {#snippet asChild(props)}
                <Button {...props()} size="icon-md" variant="outline">
                  <EyedropperIcon />
                </Button>
              {/snippet}
            </ColorPicker.EyeDropperTrigger>
            <div class="flex flex-1 flex-col gap-2.5">
              <ColorPicker.ChannelSlider channel="hue">
                <ColorPicker.ChannelSliderTrack />
                <ColorPicker.ChannelSliderThumb />
              </ColorPicker.ChannelSlider>
              <ColorPicker.ChannelSlider channel="alpha">
                <ColorPicker.TransparencyGrid />
                <ColorPicker.ChannelSliderTrack />
                <ColorPicker.ChannelSliderThumb />
              </ColorPicker.ChannelSlider>
            </div>
          </div>
        </ColorPicker.View>
      </ColorPicker.Content>
    </ColorPicker.Positioner>
  </Portal>
</ColorPicker.Root>
