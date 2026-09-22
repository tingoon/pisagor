<script setup lang="ts">
import { Field, InputGroup } from "@pisagor/vue";
import { ref } from "vue";
import { ColorPicker } from "..";

const value = ref("#eb5e41");
const onValueChange = setValue;
</script>

<template>
        <div class="flex flex-col gap-6">
          <Field>
            <Field.Label>Compact field</Field.Label>
            <ColorPicker.Field @value-change="onValueChange" :value="value" />
          </Field>
          <Field>
            <Field.Label>Input group</Field.Label>
            <ColorPicker @value-change="onValueChange" :value="value">
              <ColorPicker.Control :clearable="false">
                <InputGroup>
                  <ColorPicker.Trigger as-child>
                    <InputGroup.Addon>
                      <ColorPicker.SwatchPreview />
                    </InputGroup.Addon>
                  </ColorPicker.Trigger>
                  <ColorPicker.Input as-child>
                    <InputGroup.Input :clearable="false" />
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
  
</template>
