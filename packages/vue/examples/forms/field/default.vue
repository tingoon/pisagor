<script lang="ts" setup>
import { Field, Input } from "@pisagor/vue";
</script>

<template>
  <Field>
    <Field.Label>Username</Field.Label>
    <Input placeholder="Enter username" />
    <Field.Description>
      Choose a unique username for your account.
    </Field.Description>
  </Field>
</template>
