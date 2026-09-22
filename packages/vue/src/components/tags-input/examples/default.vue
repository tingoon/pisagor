<script setup lang="ts">
import { ref } from "vue";
import { TagsInput } from "..";

const value = ref(["React", "Solid", "Vue"]);
</script>

<template>
  <TagsInput :defaultValue="value" clearable placeholder="Add a tag..." />
</template>
