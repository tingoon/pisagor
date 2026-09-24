<script lang="ts" setup>
import { Input } from "@pisagor/vue";
import { Field } from "..";
</script>

<template>
  <Field orientation="vertical">
    <Field.Label>Name</Field.Label>
    <Input placeholder="Enter your name" type="text" />
    <Field.Description>Stacks label, control, and description vertically.</Field.Description>
  </Field>
</template>
