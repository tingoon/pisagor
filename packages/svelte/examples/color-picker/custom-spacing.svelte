<script lang="ts">
import { ColorPicker, InputGroup } from "@pisagor/svelte";
</script>

<ColorPicker defaultValue="#eb5e41" format="hsla">
  <ColorPicker.Control>
    <InputGroup>
      <ColorPicker.Trigger>
        {#snippet asChild(
          props,
        )}
          <InputGroup.Addon {...props()}>
            <ColorPicker.SwatchPreview />
          </InputGroup.Addon>
        {/snippet}
      </ColorPicker.Trigger>
      <ColorPicker.Input>
        {#snippet asChild(
          props,
        )}
          <InputGroup.Input {...props()} />
        {/snippet}
      </ColorPicker.Input>
    </InputGroup>
  </ColorPicker.Control>
  <ColorPicker.Content class="[--space:--spacing(2)] sm:[--space:--spacing(4)]">
    <ColorPicker.Area>
      <ColorPicker.AreaThumb />
    </ColorPicker.Area>
    <ColorPicker.View format="hsla">
      <div class="flex items-center gap-3">
        <ColorPicker.EyeDropperTrigger />
        <div class="flex flex-1 flex-col gap-2.5">
          <ColorPicker.ChannelSlider channel="hue" />
          <ColorPicker.ChannelSlider channel="alpha">
            <ColorPicker.TransparencyGrid />
          </ColorPicker.ChannelSlider>
        </div>
      </div>
    </ColorPicker.View>
  </ColorPicker.Content>
</ColorPicker>
