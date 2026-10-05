<script lang="ts">
import { ColorPicker, InputGroup } from "@pisagor/svelte";
</script>

<ColorPicker defaultValue="#eb5e41" format="hsla">
  <ColorPicker.Control>
    <InputGroup>
      <ColorPicker.Trigger>
        {#snippet asChild(
          props: any,
        )}
          <InputGroup.Addon {...props()}>
            <ColorPicker.SwatchPreview />
          </InputGroup.Addon>
        {/snippet}
      </ColorPicker.Trigger>
      <ColorPicker.Input channel="hex">
        {#snippet asChild(
          props: any,
        )}
          <InputGroup.Input {...props()} />
        {/snippet}
      </ColorPicker.Input>
    </InputGroup>
  </ColorPicker.Control>
  <ColorPicker.Content>
    <ColorPicker.Area>
      <ColorPicker.AreaThumb />
    </ColorPicker.Area>
    <ColorPicker.View format="hsla">
      <ColorPicker.ChannelSlider channel="hue" />
    </ColorPicker.View>
  </ColorPicker.Content>
</ColorPicker>
