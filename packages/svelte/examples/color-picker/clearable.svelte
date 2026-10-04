<script lang="ts">
import { ColorPicker, Field, InputGroup } from "@pisagor/svelte";

let value = $state("#eb5e41");
</script>

<div class="flex flex-col gap-2">
  <Field>
    <Field.Label>Compact field</Field.Label>
    <ColorPicker.Field onValueChange={(v) => (value = v)} value={value} />
  </Field>
  <Field>
    <Field.Label>Input group</Field.Label>
    <ColorPicker onValueChange={(v) => (value = v)} value={value}>
      <ColorPicker.Control clearable={false}>
        <InputGroup>
          <ColorPicker.Trigger>
            <InputGroup.Addon>
              <ColorPicker.SwatchPreview />
            </InputGroup.Addon>
          </ColorPicker.Trigger>
          <ColorPicker.Input>
            {#snippet asChild(props)}
              <InputGroup.Input {...props()} clearable={false} />
            {/snippet}
          </ColorPicker.Input>
          <ColorPicker.ClearTrigger />
        </InputGroup>
      </ColorPicker.Control>
      <ColorPicker.Content>
        <ColorPicker.Area>
          <ColorPicker.AreaThumb />
        </ColorPicker.Area>
      </ColorPicker.Content>
    </ColorPicker>
  </Field>
</div>
