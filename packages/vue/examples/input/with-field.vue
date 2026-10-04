<script lang="ts" setup>
import { Field } from "@pisagor/vue";
import { Input } from "../../src/components/input";
</script>

<template>
  <Field>
    <Field.Label>Email</Field.Label>
    <Input placeholder="you@example.com" type="email" />
    <Field.Description>We will never share your email.</Field.Description>
  </Field>
</template>
