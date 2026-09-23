<script lang="ts" setup >
import { InputGroup, Surface } from "@pisagor/vue";
import { ColorPicker } from "..";
</script>

<template>
        <Surface bordered padding="md" variant="default">
          <div class="flex flex-col gap-2">
            <ColorPicker default-value="#eb5e41" format="hsla" variant="primary">
              <ColorPicker.Control>
                <InputGroup>
                  <ColorPicker.Trigger as-child>
                    <InputGroup.Addon>
                      <ColorPicker.SwatchPreview />
                    </InputGroup.Addon>
                  </ColorPicker.Trigger>
                  <ColorPicker.Input as-child>
                    <InputGroup.Input placeholder="Primary" />
                  </ColorPicker.Input>
                </InputGroup>
              </ColorPicker.Control>
            </ColorPicker>
            <ColorPicker default-value="#eb5e41" format="hsla" variant="secondary">
              <ColorPicker.Control>
                <InputGroup>
                  <ColorPicker.Trigger as-child>
                    <InputGroup.Addon>
                      <ColorPicker.SwatchPreview />
                    </InputGroup.Addon>
                  </ColorPicker.Trigger>
                  <ColorPicker.Input as-child>
                    <InputGroup.Input placeholder="Secondary" />
                  </ColorPicker.Input>
                </InputGroup>
              </ColorPicker.Control>
            </ColorPicker>
          </div>
        </Surface>
  
</template>
