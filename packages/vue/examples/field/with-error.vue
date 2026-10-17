<script lang="ts" setup>
import { Field, Input } from "@pisagor/vue";
</script>

<template>
  <Field invalid>
    <Field.Label>Email</Field.Label>
    <Input placeholder="you@example.com" />
    <Field.Error>Enter a valid email address.</Field.Error>
  </Field>
</template>
