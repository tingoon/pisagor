<script setup lang="ts">
import { Field } from "@pisagor/vue";
import { TagsInput } from "..";
</script>

<template>
        <Field>
          <Field.Label>Frameworks (max 3)</Field.Label>
          <TagsInput class="w-full" :defaultValue="['React', 'Solid']" :max="3" />
        </Field>
  
</template>
