<script lang="ts" setup>
import { SelectField } from "../../../../../src/fields/select-field";
</script>

<template>
  <SelectField
    error="Please select a country."
    id="select-field-country-invalid"
    invalid
    label="Country"
    placeholder="Select a country"
    :items="countryOptions"
  />
</template>
