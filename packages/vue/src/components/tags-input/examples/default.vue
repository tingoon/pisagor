<script lang="ts" setup>
import { ref } from "vue";
import { TagsInput } from "..";

const value = ref(["React", "Solid", "Vue"]);
</script>

<template>
  <TagsInput clearable placeholder="Add a tag..." :default-value="value" />
</template>
