<script lang="ts" setup>
import { ref } from "vue";
import { TagsInput } from "../../../../../src/components/tags-input";

const value = ref(["React", "Solid", "Vue"]);
</script>

<template>
  <TagsInput clearable placeholder="Add a tag..." :default-value="value" />
</template>
