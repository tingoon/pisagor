<script lang="ts" setup>
import { TagsInput } from "../../src/components/tags-input";
</script>

<template>
  <TagsInput
    class="w-full"
    disabled
    :default-value="['React', 'Solid', 'Vue']"
  />
</template>
