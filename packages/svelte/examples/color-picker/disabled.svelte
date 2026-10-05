<script lang="ts">
import { ColorPicker, Input } from "@pisagor/svelte";
</script>

<ColorPicker defaultValue="#eb5e41" disabled>
  <ColorPicker.Control>
    <ColorPicker.Input channel="hex">
      {#snippet asChild(
        props: any,
      )}
        <Input {...props()} placeholder="#EB5E41" />
      {/snippet}
    </ColorPicker.Input>
  </ColorPicker.Control>
</ColorPicker>
