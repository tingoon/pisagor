<script setup lang="ts">
import { Input, Surface } from "@pisagor/vue";
import { Field } from "..";
</script>

<template>
        <Surface bordered padding="md" variant="default">
          <Field>
            <Field.Label>Username</Field.Label>
            <Input placeholder="Enter username" />
            <Field.Description>Choose a unique username for your account.</Field.Description>
          </Field>
        </Surface>
  
</template>
