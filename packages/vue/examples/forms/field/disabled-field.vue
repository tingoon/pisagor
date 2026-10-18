<script lang="ts" setup>
import { Field, Input } from "@pisagor/vue";
</script>

<template>
  <Field disabled>
    <Field.Label>Email</Field.Label>
    <Input disabled placeholder="Enter your email" type="email" />
    <Field.Description>This field is currently unavailable.</Field.Description>
  </Field>
</template>
