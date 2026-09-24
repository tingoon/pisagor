<script lang="ts" setup>
import { AutocompleteField } from "..";
</script>

<template>
  <AutocompleteField
    description="Start typing to filter options."
    disabled
    id="autocomplete-field-city-disabled"
    label="City"
    :items="cityOptions"
  />
</template>
