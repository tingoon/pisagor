<script lang="ts">
import { ColorPicker, Input } from "@pisagor/svelte";
</script>

<ColorPicker defaultValue="#eb5e41" disabled>
  <ColorPicker.Control>
    <ColorPicker.Input>
      {#snippet asChild(
        props,
      )}
        <Input {...props()} placeholder="#EB5E41" />
      {/snippet}
    </ColorPicker.Input>
  </ColorPicker.Control>
</ColorPicker>
