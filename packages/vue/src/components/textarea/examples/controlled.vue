<script lang="ts" setup >
import { Field } from "@pisagor/vue";
import { ref } from "vue";
import { Textarea } from "..";

const message = ref("");
</script>

<template>
        <Field class="flex flex-col gap-3">
          <Textarea placeholder="Type your message here" :value="message" @value-change="(value) => (message = value)" />
          <Field.Description class="text-right">Character count: {{ message.length }}</Field.Description>
        </Field>
  
</template>
