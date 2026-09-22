<script setup lang="ts">
import { Field } from "@pisagor/vue";
import { TagsInput } from "..";

const defaultValue = ["React", "Solid"];

const sizes = ["xs", "sm", "md", "lg"] as const;
</script>

<template>
        <div class="flex flex-col gap-2">
          <Field v-for="size in sizes" :key="size">
            <Field.Label>Frameworks</Field.Label>
            <TagsInput class="w-full" :defaultValue="defaultValue" :size="size" />
          </Field>
        </div>
  
</template>
