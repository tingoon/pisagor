<script lang="ts" setup>
import { PhX } from "@phosphor-icons/vue";
import { ColorPicker, Field, InputGroup } from "@pisagor/vue";
import { ref } from "vue";

const value = ref("#eb5e41");

function onValueChange(next: typeof value.value) {
  value.value = next;
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <Field>
      <Field.Label>Compact field</Field.Label>
      <ColorPicker clearable :value="value" @value-change="onValueChange" />
    </Field>
    <Field>
      <Field.Label>Input group</Field.Label>
      <ColorPicker.Root :value="value" @value-change="onValueChange">
        <ColorPicker.Control>
          <InputGroup>
            <ColorPicker.Trigger as-child>
              <InputGroup.Addon>
                <ColorPicker.SwatchPreview />
              </InputGroup.Addon>
            </ColorPicker.Trigger>
            <ColorPicker.Input as-child>
              <InputGroup.Input :clearable="false" />
            </ColorPicker.Input>
            <InputGroup.Addon align="inline-end">
              <ColorPicker.ClearTrigger as-child>
                <InputGroup.Button size="icon-xs" variant="ghost">
                  <PhX />
                </InputGroup.Button>
              </ColorPicker.ClearTrigger>
            </InputGroup.Addon>
          </InputGroup>
        </ColorPicker.Control>
        <Teleport to="body">
          <ColorPicker.Positioner>
            <ColorPicker.Content>
              <ColorPicker.Area>
                <ColorPicker.AreaBackground />
                <ColorPicker.AreaThumb />
              </ColorPicker.Area>
            </ColorPicker.Content>
          </ColorPicker.Positioner>
        </Teleport>
      </ColorPicker.Root>
    </Field>
  </div>
</template>
