<script lang="ts" setup>
import { AutocompleteField } from "@pisagor/vue-form";
import { cityOptions } from "../options";
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
