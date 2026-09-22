<script setup lang="ts">
import { AutocompleteField } from "..";
</script>

<template>
  <AutocompleteField description="Start typing to filter options." disabled id="autocomplete-field-city-disabled" :items='cityOptions' label="City" />
</template>
