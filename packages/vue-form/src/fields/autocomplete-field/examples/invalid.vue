<script setup lang="ts">
import { AutocompleteField } from "..";
</script>

<template>
  <AutocompleteField error="Please select a city." id="autocomplete-field-city-invalid" invalid :items='cityOptions' label="City" />
</template>
