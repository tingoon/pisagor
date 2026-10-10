<script lang="ts" setup>
import { TagsInputField } from "@pisagor/vue-form";
</script>

<template>
  <TagsInputField
    description="Press Enter to add a tag."
    id="tags-input-field-topics"
    label="Topics"
    :default-value="['design', 'frontend']"
  />
</template>
