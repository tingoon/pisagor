<script setup lang="ts">
import { Field } from "@pisagor/vue";
import { Input } from "..";
</script>

<template>
        <Field>
          <Field.Label>Email</Field.Label>
          <Input placeholder="you@example.com" type="email" />
          <Field.Description>We will never share your email.</Field.Description>
        </Field>
  
</template>
