<script lang="ts">
import source from "./invalid.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { SelectField } from "@pisagor/vue-form";
import { countryOptions } from "../options";
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
