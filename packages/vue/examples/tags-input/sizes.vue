<script lang="ts">
import source from "./sizes.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Field, TagsInput } from "@pisagor/vue";

const defaultValue = ["React", "Solid"];

const sizes = ["sm", "md", "lg"] as const;
</script>

<template>
  <div class="flex flex-col gap-2">
    <Field v-for="size in sizes" :key="size">
      <Field.Label>Frameworks</Field.Label>
      <TagsInput class="w-full" :default-value="defaultValue" :size="size" />
    </Field>
  </div>
</template>
