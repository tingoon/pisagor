<script lang="ts">
import { InputGroup } from "@pisagor/svelte";
import { ColorPicker } from "@pisagor/svelte/color-picker";
</script>

<ColorPicker defaultValue="#eb5e41" format="hsla">
  <ColorPicker.Control>
    <InputGroup>
      <ColorPicker.Trigger>
        {#snippet asChild(props)}
          <InputGroup.Addon {...props()}>
            <ColorPicker.SwatchPreview />
          </InputGroup.Addon>
        {/snippet}
      </ColorPicker.Trigger>
      <ColorPicker.Input>
        {#snippet asChild(props)}
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
