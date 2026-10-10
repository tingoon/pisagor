<script lang="ts" setup>
import { SliderField } from "@pisagor/vue-form";
</script>

<template>
  <SliderField
    description="Applies to all notification sounds."
    id="slider-field-volume"
    label="Volume"
    show-value
    :default-value="[70]"
  />
</template>
