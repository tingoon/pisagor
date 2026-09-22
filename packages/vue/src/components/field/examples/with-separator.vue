<script setup lang="ts">
import { Input } from "@pisagor/vue";
import { Field } from "..";
</script>

<template>
        <Field>
          <Field.Label>Account</Field.Label>
          <Input placeholder="Username" />
          <Field.Separator>or</Field.Separator>
          <Input placeholder="Email" />
        </Field>
  
</template>
