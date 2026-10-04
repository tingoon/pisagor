<script lang="ts" setup>
import { Field, NumberInput } from "@pisagor/vue";
</script>

<template>
  <Field>
    <Field.Label>Quantity</Field.Label>
    <NumberInput default-value="1" placeholder="0" />
    <Field.Description>Choose how many items to order.</Field.Description>
  </Field>
</template>
