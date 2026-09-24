<script lang="ts" setup>
import { Field } from "@pisagor/vue";
import { RadioGroup } from "..";
</script>

<template>
  <Field>
    <Field.Label>Theme</Field.Label>
    <RadioGroup
      default-value="light"
      :items="[
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
            { label: 'System', value: 'system' },
          ]"
    />
  </Field>
</template>
