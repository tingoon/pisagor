<script setup lang="ts">
import { Field } from "@pisagor/vue";
import { ref } from "vue";
import { TagsInput } from "..";

const value = ref(initialValue);
const onValueChange = setValue;
</script>

<template>
        <Field>
          <Field.Label>Frameworks</Field.Label>
          <TagsInput class="w-full" @value-change="onValueChange" :value="value" />
        </Field>
  
</template>
