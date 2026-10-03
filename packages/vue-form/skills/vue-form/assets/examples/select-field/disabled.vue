<script lang="ts" setup>
import { SelectField } from "../../../../../src/fields/select-field";
</script>

<template>
  <SelectField
    description="Used for shipping estimates."
    disabled
    id="select-field-country-disabled"
    label="Country"
    placeholder="Select a country"
    :items="countryOptions"
  />
</template>
