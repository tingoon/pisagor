<script lang="ts" setup>
import { TagsInput } from "@pisagor/vue";
</script>

<template>
  <TagsInput
    class="w-full"
    disabled
    :default-value="['React', 'Solid', 'Vue']"
  />
</template>
