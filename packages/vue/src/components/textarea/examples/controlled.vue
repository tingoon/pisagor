<script setup lang="ts">
import { Field } from "@pisagor/vue";
import { ref } from "vue";
import { Textarea } from "..";

const message = ref("");
</script>

<template>
        <Field class="flex flex-col gap-3">
          <Textarea @value-change="(value) => (message = value)" placeholder="Type your message here" :value="message" />
          <Field.Description class="text-right">Character count: {{ message.length }}</Field.Description>
        </Field>
  
</template>
