<script lang="ts" setup>
import { AutocompleteField } from "@pisagor/vue-form";
import { cityOptions } from "../options";
</script>

<template>
  <AutocompleteField
    description="Type a few letters or enter a city that isn't listed."
    id="autocomplete-field-office"
    label="Office location"
    placeholder="e.g. Berlin"
    :items="cityOptions"
  />
</template>
