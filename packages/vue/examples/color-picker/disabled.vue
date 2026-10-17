<script lang="ts">
import source from "./disabled.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { ColorPicker, Input } from "@pisagor/vue";
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
