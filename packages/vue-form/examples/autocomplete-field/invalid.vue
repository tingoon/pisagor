<script lang="ts" setup>
import { AutocompleteField } from "../../src/fields/autocomplete-field";
</script>

<template>
  <AutocompleteField
    error="Please select a city."
    id="autocomplete-field-city-invalid"
    invalid
    label="City"
    :items="cityOptions"
  />
</template>
