<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { ColorPicker, Field, InputGroup } from "@pisagor/svelte";
  import { XIcon } from "phosphor-svelte";

  let value = $state("#eb5e41");
</script>

<div class="flex flex-col gap-2">
  <Field>
    <Field.Label>Compact field</Field.Label>
    <ColorPicker clearable bind:value />
  </Field>
  <Field>
    <Field.Label>Input group</Field.Label>
    <ColorPicker.Root bind:value>
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
          <InputGroup.Addon align="inline-end">
            <ColorPicker.ClearTrigger>
              {#snippet asChild(props)}
                <InputGroup.Button {...props()} size="icon-xs" variant="ghost">
                  <XIcon />
                </InputGroup.Button>
              {/snippet}
            </ColorPicker.ClearTrigger>
          </InputGroup.Addon>
        </InputGroup>
      </ColorPicker.Control>
      <Portal>
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            <ColorPicker.Area>
              <ColorPicker.AreaBackground />
              <ColorPicker.AreaThumb />
            </ColorPicker.Area>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </ColorPicker.Root>
  </Field>
</div>
