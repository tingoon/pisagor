<script lang="ts" setup>
import { Field } from "@pisagor/vue";
import { TagsInput } from "..";
</script>

<template>
  <Field>
    <Field.Label>Frameworks</Field.Label>
    <TagsInput blur-behavior="add" class="w-full" :default-value="['React']" />
  </Field>
</template>
