<script lang="ts">
import source from "./switch-field.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Field, Switch } from "@pisagor/vue";
</script>

<template>
  <Field orientation="horizontal">
    <Switch default-checked />
    <Field.Label> Airplane mode</Field.Label>
  </Field>
</template>
