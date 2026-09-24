<script lang="ts" setup>
import { Field } from "@pisagor/vue";
import { TagsInput } from "..";

const validate = ({ value, inputValue }) => {
  const next = inputValue.trim();
  return Boolean(next) && !value.includes(next) && next.length >= 3 && validTagPattern.test(next);
};
</script>

<template>
  <Field>
    <Field.Label>Min 3 chars, alphanumeric + hyphen</Field.Label>
    <TagsInput class="w-full" :validate="validate" />
  </Field>
</template>
