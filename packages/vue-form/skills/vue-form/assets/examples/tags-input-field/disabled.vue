<script lang="ts" setup>
import { TagsInputField } from "../../../../../src/fields/tags-input-field";
</script>

<template>
  <TagsInputField
    disabled
    id="tags-input-field-skills-disabled"
    label="Skills"
    :value='["TypeScript"]'
  />
</template>
