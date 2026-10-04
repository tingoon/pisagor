<script lang="ts" setup>
import { Checkbox, Field } from "@pisagor/vue";
</script>

<template>
  <Field orientation="horizontal">
    <Checkbox />
    <Field.Content>
      <Field.Label>Receive notifications</Field.Label>
      <Field.Description>
        You'll receive a notification when someone posts a comment
      </Field.Description>
    </Field.Content>
  </Field>
</template>
