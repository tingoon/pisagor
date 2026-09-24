<script lang="ts" setup>
import { Field } from "@pisagor/vue";
import { TagsInput } from "..";
</script>

<template>
  <Field>
    <Field.Label>Frameworks</Field.Label>
    <TagsInput add-on-paste class="w-full" delimiter="," :default-value="[]" />
  </Field>
</template>
