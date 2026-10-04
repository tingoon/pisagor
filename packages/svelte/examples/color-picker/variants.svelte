<script lang="ts">
import { ColorPicker, InputGroup } from "@pisagor/svelte";
</script>

<div class="flex flex-col gap-2">
  <ColorPicker format="hsla" value="#eb5e41" variant="primary">
    <ColorPicker.Control>
      <InputGroup>
        <ColorPicker.Trigger>
          <InputGroup.Addon>
            <ColorPicker.SwatchPreview />
          </InputGroup.Addon>
        </ColorPicker.Trigger>
        <ColorPicker.Input>
          {#snippet asChild(props)}
            <InputGroup.Input {...props()} placeholder="Primary" />
          {/snippet}
        </ColorPicker.Input>
      </InputGroup>
    </ColorPicker.Control>
  </ColorPicker>
  <ColorPicker format="hsla" value="#eb5e41" variant="secondary">
    <ColorPicker.Control>
      <InputGroup>
        <ColorPicker.Trigger>
          <InputGroup.Addon>
            <ColorPicker.SwatchPreview />
          </InputGroup.Addon>
        </ColorPicker.Trigger>
        <ColorPicker.Input>
          {#snippet asChild(props)}
            <InputGroup.Input {...props()} placeholder="Secondary" />
          {/snippet}
        </ColorPicker.Input>
      </InputGroup>
    </ColorPicker.Control>
  </ColorPicker>
</div>
