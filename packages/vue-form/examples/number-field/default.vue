<script lang="ts" setup>
import { NumberField } from "@pisagor/vue-form";
</script>

<template>
  <NumberField
    default-value="2"
    description="Up to 8 guests per booking."
    id="number-field-guests"
    label="Guests"
    :max="8"
    :min="1"
  />
</template>
