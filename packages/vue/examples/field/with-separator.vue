<script lang="ts" setup>
import { Field, Input } from "@pisagor/vue";
</script>

<template>
  <Field>
    <Field.Label>Account</Field.Label>
    <Input placeholder="Username" />
    <Field.Separator>or</Field.Separator>
    <Input placeholder="Email" />
  </Field>
</template>
