<script lang="ts" setup>
import { Switch } from "@pisagor/vue";
import { Field } from "..";
</script>

<template>
  <Field orientation="horizontal">
    <Switch default-checked />
    <Field.Label> Airplane mode</Field.Label>
  </Field>
</template>
