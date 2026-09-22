<script setup lang="ts">
import { Input } from "@pisagor/vue";
import { Field } from "..";
</script>

<template>
        <Field required>
          <Field.Label>
            Password <Field.RequiredIndicator />
          </Field.Label>
          <Input placeholder="Enter password" type="password" />
          <Field.Error>Please fill out this field.</Field.Error>
        </Field>
  
</template>
