<script lang="ts" setup>
import { Field, Input } from "@pisagor/vue";
</script>

<template>
  <Field required>
    <Field.Label> Password <Field.RequiredIndicator /> </Field.Label>
    <Input placeholder="Enter password" type="password" />
    <Field.Error>Please fill out this field.</Field.Error>
  </Field>
</template>
