<script lang="ts">
import source from "./orientation-horizontal.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Field, Input } from "@pisagor/vue";
</script>

<template>
  <Field orientation="horizontal">
    <Field.Label>Display name</Field.Label>
    <Input placeholder="Jane Doe" />
  </Field>
</template>
