<script lang="ts" setup >
import { InputGroup } from "@pisagor/vue";
import { ColorPicker } from "..";
</script>

<template>
        <ColorPicker default-value="#eb5e41">
          <ColorPicker.Control>
            <InputGroup>
              <InputGroup.Addon align="inline-start">
                <ColorPicker.SwatchPreview />
              </InputGroup.Addon>
              <ColorPicker.Input as-child>
                <InputGroup.Input />
              </ColorPicker.Input>
            </InputGroup>
          </ColorPicker.Control>
        </ColorPicker>
  
</template>
