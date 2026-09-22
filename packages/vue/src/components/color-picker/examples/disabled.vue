<script setup lang="ts">
import { Input } from "@pisagor/vue";
import { ColorPicker } from "..";
</script>

<template>
        <ColorPicker default-value="#eb5e41" disabled>
          <ColorPicker.Control>
            <ColorPicker.Input as-child>
              <Input placeholder="#EB5E41" />
            </ColorPicker.Input>
          </ColorPicker.Control>
        </ColorPicker>
  
</template>
