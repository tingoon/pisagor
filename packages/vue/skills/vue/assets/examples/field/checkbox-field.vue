<script lang="ts" setup>
import { Checkbox } from "@pisagor/vue";
import { Field } from "../../../../../src/components/field";
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
