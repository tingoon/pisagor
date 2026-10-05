<script lang="ts">
import { ColorPicker, InputGroup } from "@pisagor/svelte";
</script>

<div class="flex flex-col gap-2">
  <ColorPicker format="hsla" value="#eb5e41">
    <ColorPicker.Control>
      <InputGroup>
        <ColorPicker.Trigger>
          <InputGroup.Addon>
            <ColorPicker.SwatchPreview />
          </InputGroup.Addon>
        </ColorPicker.Trigger>
        <ColorPicker.Input channel="hex">
          {#snippet asChild(
            props: any,
          )}
            <InputGroup.Input {...props()} placeholder="Primary" />
          {/snippet}
        </ColorPicker.Input>
      </InputGroup>
    </ColorPicker.Control>
  </ColorPicker>
  <ColorPicker format="hsla" value="#eb5e41">
    <ColorPicker.Control>
      <InputGroup>
        <ColorPicker.Trigger>
          <InputGroup.Addon>
            <ColorPicker.SwatchPreview />
          </InputGroup.Addon>
        </ColorPicker.Trigger>
        <ColorPicker.Input channel="hex">
          {#snippet asChild(
            props: any,
          )}
            <InputGroup.Input {...props()} placeholder="Secondary" />
          {/snippet}
        </ColorPicker.Input>
      </InputGroup>
    </ColorPicker.Control>
  </ColorPicker>
</div>
