<script lang="ts" setup>
import { Textarea } from "@pisagor/vue";
import { Field } from "..";
</script>

<template>
  <Field>
    <Field.Label>Bio</Field.Label>
    <Textarea placeholder="Tell us about yourself…" />
    <Field.Description>Write a short bio. Maximum 500 characters.</Field.Description>
  </Field>
</template>
