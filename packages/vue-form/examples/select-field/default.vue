<script lang="ts" setup>
import { SelectField } from "@pisagor/vue-form";
import { countryOptions } from "../options";
</script>

<template>
  <SelectField
    description="Sets your currency and tax rules."
    id="select-field-billing-country"
    label="Billing country"
    placeholder="Choose a country"
    :items="countryOptions"
  />
</template>
