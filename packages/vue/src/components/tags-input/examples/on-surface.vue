<script lang="ts" setup >
import { Surface } from "@pisagor/vue";
import { TagsInput } from "..";

const defaultValue = ["React", "Solid", "Vue"];
</script>

<template>
        <Surface bordered padding="md" variant="default">
          <div class="flex flex-col gap-2">
            <TagsInput class="w-full" variant="primary" :defaultValue="defaultValue" />
            <TagsInput class="w-full" variant="secondary" :defaultValue="defaultValue" />
          </div>
        </Surface>
  
</template>
