<script lang="ts" setup>
import { Field, Textarea } from "@pisagor/vue";
</script>

<template>
  <Field>
    <Field.Label>Message</Field.Label>
    <Textarea placeholder="Write your message" />
    <Field.Description>Markdown is supported.</Field.Description>
  </Field>
</template>
