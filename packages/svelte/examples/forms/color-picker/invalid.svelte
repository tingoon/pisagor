<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { ColorPicker, InputGroup } from "@pisagor/svelte";
</script>

<ColorPicker.Root defaultValue="#eb5e41" invalid>
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
      </ColorPicker.Content>
    </ColorPicker.Positioner>
  </Portal>
</ColorPicker.Root>
