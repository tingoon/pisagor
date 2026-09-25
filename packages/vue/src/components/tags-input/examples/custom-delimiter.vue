<script lang="ts" setup>
import { Field } from "@pisagor/vue";
import { TagsInput } from "..";

const tagDelimiter = /[,\s]+/;
</script>

<template>
  <Field>
    <Field.Label>Frameworks</Field.Label>
    <TagsInput
      class="w-full"
      :default-value="['React']"
      :delimiter="tagDelimiter"
    />
  </Field>
</template>
