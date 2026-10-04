<script lang="ts" setup>
import { Field, TagsInput } from "@pisagor/vue";
</script>

<template>
  <Field>
    <Field.Label>Frameworks</Field.Label>
    <TagsInput blur-behavior="add" class="w-full" :default-value="['React']" />
  </Field>
</template>
