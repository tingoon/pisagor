<script lang="ts">
import source from "./indeterminate.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Checkbox, Field } from "@pisagor/vue";
</script>

<template>
  <Field orientation="horizontal">
    <Checkbox checked="indeterminate" />
    <Field.Label>Select all items</Field.Label>
  </Field>
</template>
