<script lang="ts">
import source from "./invalid.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { SliderField } from "@pisagor/vue-form";
</script>

<template>
  <SliderField
    error="Value is too low."
    id="slider-field-opacity-invalid"
    invalid
    label="Opacity"
    show-value
    :default-value="[10]"
  />
</template>
