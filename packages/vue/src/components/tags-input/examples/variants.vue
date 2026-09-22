<script setup lang="ts">
import { TagsInput } from "..";

const defaultValue = ["React", "Solid"];
</script>

<template>
        <div class="flex flex-col gap-2">
          <TagsInput class="w-full" :defaultValue="defaultValue" variant="primary" />
          <TagsInput class="w-full" :defaultValue="defaultValue" variant="secondary" />
        </div>
  
</template>
