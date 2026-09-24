<script lang="ts" setup>
import { SliderField } from "..";
</script>

<template>
  <SliderField
    disabled
    id="slider-field-opacity-disabled"
    label="Opacity"
    show-value
    :default-value="[40]"
  />
</template>
