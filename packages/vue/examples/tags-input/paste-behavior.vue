<script lang="ts" setup>
import { Field, TagsInput } from "@pisagor/vue";
</script>

<template>
  <Field>
    <Field.Label>Frameworks</Field.Label>
    <TagsInput add-on-paste class="w-full" delimiter="," :default-value="[]" />
  </Field>
</template>
