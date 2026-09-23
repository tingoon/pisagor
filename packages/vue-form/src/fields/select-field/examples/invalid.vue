<script lang="ts" setup >
import { SelectField } from "..";
</script>

<template>
  <SelectField error="Please select a country." id="select-field-country-invalid" invalid label="Country" placeholder="Select a country" :items='countryOptions' />
</template>
