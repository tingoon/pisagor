<script lang="ts" setup>
import { Field, Input } from "@pisagor/vue";
</script>

<template>
  <Field>
    <Field.Label>Email</Field.Label>
    <Input placeholder="you@example.com" type="email" />
    <Field.Description>We will never share your email.</Field.Description>
  </Field>
</template>
