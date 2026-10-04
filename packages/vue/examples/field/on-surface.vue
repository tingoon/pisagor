<script lang="ts" setup>
import { Field, Input, Surface } from "@pisagor/vue";
</script>

<template>
  <Surface bordered padding="md" variant="default">
    <Field>
      <Field.Label>Username</Field.Label>
      <Input placeholder="Enter username" />
      <Field.Description
        >Choose a unique username for your account.</Field.Description
      >
    </Field>
  </Surface>
</template>
