<script lang="ts">
import { Button, ColorPicker, Input } from "@pisagor/svelte";
</script>

<ColorPicker format="rgba">
  <ColorPicker.Control>
    <ColorPicker.Trigger>
      {#snippet asChild(
  props,
)}
        <Button {...props()} size="lg" variant="ghost">
          <ColorPicker.SwatchPreview class="size-6" />
          Pick a color
        </Button>
      {/snippet}
    </ColorPicker.Trigger>
  </ColorPicker.Control>
  <ColorPicker.Content>
    <ColorPicker.Area>
      <ColorPicker.AreaThumb />
    </ColorPicker.Area>
    <ColorPicker.ChannelSlider channel="hue" />
    <div class="grid grid-cols-3 gap-2">
      <ColorPicker.Input channel="red">
        {#snippet asChild(
  props,
)}
          <Input {...props()} />
        {/snippet}
      </ColorPicker.Input>
      <ColorPicker.Input channel="green">
        {#snippet asChild(
  props,
)}
          <Input {...props()} />
        {/snippet}
      </ColorPicker.Input>
      <ColorPicker.Input channel="blue">
        {#snippet asChild(
  props,
)}
          <Input {...props()} />
        {/snippet}
      </ColorPicker.Input>
    </div>
  </ColorPicker.Content>
</ColorPicker>
