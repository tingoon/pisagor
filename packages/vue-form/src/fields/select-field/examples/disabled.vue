<script setup lang="ts">
import { SelectField } from "..";
</script>

<template>
  <SelectField description="Used for shipping estimates." disabled id="select-field-country-disabled" :items='countryOptions' label="Country" placeholder="Select a country" />
</template>
