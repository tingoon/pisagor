<script lang="ts">
import source from "./label-format-select.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { ColorPicker, Input, parseColor } from "@pisagor/vue";

const defaultValue = parseColor("#0485F7").toString("rgba");
</script>

<template>
  <ColorPicker class="w-full" :default-value="defaultValue">
    <ColorPicker.Label>Brand color</ColorPicker.Label>
    <ColorPicker.Control class="min-w-0 flex-1">
      <ColorPicker.FormatSelect />
      <ColorPicker.ChannelInput as-child channel="hex">
        <Input />
      </ColorPicker.ChannelInput>
      <ColorPicker.SwatchPreview class="size-6" />
    </ColorPicker.Control>
  </ColorPicker>
</template>
