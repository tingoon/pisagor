<script lang="ts" setup >
import { SliderField } from "..";
</script>

<template>
  <SliderField error="Value is too low." id="slider-field-opacity-invalid" invalid label="Opacity" show-value :default-value='[10]' />
</template>
