<script lang="ts" setup>
import { Field } from "@pisagor/vue";
import { Switch } from "..";
</script>

<template>
  <Field orientation="horizontal">
    <Switch default-checked />
    <Field.Label>Airplane mode</Field.Label>
  </Field>
</template>
