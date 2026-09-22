<script setup lang="ts">
import { Surface } from "@pisagor/vue";
import { TagsInput } from "..";

const defaultValue = ["React", "Solid", "Vue"];
</script>

<template>
        <Surface bordered padding="md" variant="default">
          <div class="flex flex-col gap-2">
            <TagsInput class="w-full" :defaultValue="defaultValue" variant="primary" />
            <TagsInput class="w-full" :defaultValue="defaultValue" variant="secondary" />
          </div>
        </Surface>
  
</template>
