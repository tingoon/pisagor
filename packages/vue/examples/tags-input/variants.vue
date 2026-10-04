<script lang="ts" setup>
import { TagsInput } from "../../src/components/tags-input";

const defaultValue = ["React", "Solid"];
</script>

<template>
  <div class="flex flex-col gap-2">
    <TagsInput class="w-full" variant="primary" :default-value="defaultValue" />
    <TagsInput
      class="w-full"
      variant="secondary"
      :default-value="defaultValue"
    />
  </div>
</template>
