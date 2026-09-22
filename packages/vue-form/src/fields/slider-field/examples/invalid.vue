<script setup lang="ts">
import { SliderField } from "..";
</script>

<template>
  <SliderField :default-value='[10]' error="Value is too low." id="slider-field-opacity-invalid" invalid label="Opacity" show-value />
</template>
