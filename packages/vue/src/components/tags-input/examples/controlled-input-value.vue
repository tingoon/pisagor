<script lang="ts" setup>
import { Button, Field } from "@pisagor/vue";
import { ref } from "vue";
import { TagsInput } from "..";

const inputValue = ref("");
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="flex flex-wrap gap-2">
      <Button size="sm" variant="outline" @click="inputValue = 'React'">Set "React"</Button>
      <Button size="sm" variant="outline" @click="inputValue = ''">Clear</Button>
    </div>
    <Field>
      <Field.Label>Frameworks</Field.Label>
      <TagsInput
        class="w-full"
        :default-value="['React']"
        :input-value="inputValue"
        @input-value-change="(details) => (inputValue = details.inputValue)"
      />
    </Field>
  </div>
</template>
