<script lang="ts">
import { InputGroup } from "@pisagor/svelte";
import { ColorPicker } from "@pisagor/svelte/color-picker";
</script>

<ColorPicker defaultValue="#eb5e41">
  <ColorPicker.Control>
    <InputGroup>
      <InputGroup.Addon align="inline-start">
        <ColorPicker.SwatchPreview />
      </InputGroup.Addon>
      <ColorPicker.Input>
        {#snippet asChild(props)}
          <InputGroup.Input {...props()} />
        {/snippet}
      </ColorPicker.Input>
    </InputGroup>
  </ColorPicker.Control>
</ColorPicker>
