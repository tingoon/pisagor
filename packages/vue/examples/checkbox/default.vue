<script lang="ts">
import source from "./default.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Checkbox, Field } from "@pisagor/vue";
</script>

<template>
  <Field orientation="horizontal">
    <Checkbox default-checked />
    <Field.Label>Accept terms and conditions</Field.Label>
  </Field>
</template>
