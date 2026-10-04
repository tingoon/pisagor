<script lang="ts" setup>
import { Field, Textarea } from "@pisagor/vue";
</script>

<template>
  <Field>
    <Field.Label>Bio</Field.Label>
    <Textarea placeholder="Tell us about yourself…" />
    <Field.Description
      >Write a short bio. Maximum 500 characters.</Field.Description
    >
  </Field>
</template>
