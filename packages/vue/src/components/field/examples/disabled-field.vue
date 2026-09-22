<script setup lang="ts">
import { Input } from "@pisagor/vue";
import { Field } from "..";
</script>

<template>
        <Field disabled>
          <Field.Label>Email</Field.Label>
          <Input disabled placeholder="Enter your email" type="email" />
          <Field.Description>This field is currently unavailable.</Field.Description>
        </Field>
  
</template>
