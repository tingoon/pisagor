<script setup lang="ts">
import { Input } from "@pisagor/vue";
import { Field } from "..";
</script>

<template>
        <Field invalid>
          <Field.Label>Email</Field.Label>
          <Input placeholder="you@example.com" />
          <Field.Error>Enter a valid email address.</Field.Error>
        </Field>
  
</template>
