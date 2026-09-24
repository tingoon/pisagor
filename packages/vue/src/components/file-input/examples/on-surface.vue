<script lang="ts" setup>
import { Surface } from "@pisagor/vue";
import { FileInput } from "..";
</script>

<template>
  <Surface bordered padding="md" variant="default">
    <div class="flex flex-col gap-2">
      <FileInput variant="primary" />
      <FileInput variant="secondary" />
    </div>
  </Surface>
</template>
