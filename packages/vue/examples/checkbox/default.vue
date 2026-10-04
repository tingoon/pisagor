<script lang="ts" setup>
import { Field } from "@pisagor/vue";
import { Checkbox } from "../../src/components/checkbox";
</script>

<template>
  <Field orientation="horizontal">
    <Checkbox default-checked />
    <Field.Label>Accept terms and conditions</Field.Label>
  </Field>
</template>
