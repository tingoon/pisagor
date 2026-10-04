<script lang="ts" setup>
import { TagsInput } from "@pisagor/vue";
import { ref } from "vue";

const value = ref(["React", "Solid", "Vue"]);
</script>

<template>
  <TagsInput clearable placeholder="Add a tag..." :default-value="value" />
</template>
