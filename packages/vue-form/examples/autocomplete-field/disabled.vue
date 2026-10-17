<script lang="ts">
import source from "./disabled.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { AutocompleteField } from "@pisagor/vue-form";
import { cityOptions } from "../options";
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
