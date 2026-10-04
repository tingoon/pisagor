<script lang="ts" setup>
import { Field } from "@pisagor/vue";
import { Checkbox } from "../../src/components/checkbox";
</script>

<template>
  <Field orientation="horizontal">
    <Checkbox checked="indeterminate" />
    <Field.Label>Select all items</Field.Label>
  </Field>
</template>
