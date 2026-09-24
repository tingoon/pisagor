<script lang="ts" setup>
import { Field } from "@pisagor/vue";
import { DatePicker } from "..";
</script>

<template>
  <Field>
    <Field.Label>Time</Field.Label>
    <DatePicker.Timer />
  </Field>
</template>
