<script lang="ts" setup>
import { Checkbox, Field } from "@pisagor/vue";

const sizes = ["sm", "md", "lg"] as const;
</script>

<template>
  <div class="flex flex-col gap-2">
    <Field orientation="horizontal" v-for="size in sizes" :key="size">
      <Checkbox default-checked :size="size" />
      <Field.Label>Size {{ size }}</Field.Label>
    </Field>
  </div>
</template>
