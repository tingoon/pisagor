<script lang="ts" setup>
import { Field, RadioGroup } from "@pisagor/vue";
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
