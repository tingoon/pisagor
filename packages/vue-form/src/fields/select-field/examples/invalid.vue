<script setup lang="ts">
import { SelectField } from "..";
</script>

<template>
  <SelectField error="Please select a country." id="select-field-country-invalid" invalid :items='countryOptions' label="Country" placeholder="Select a country" />
</template>
