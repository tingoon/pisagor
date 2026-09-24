<script lang="ts" setup>
import { Surface } from "@pisagor/vue";
import { Input } from "..";
</script>

<template>
  <Surface bordered padding="md" variant="default">
    <div class="flex flex-col gap-2">
      <Input placeholder="Primary" variant="primary" />
      <Input placeholder="Secondary" variant="secondary" />
    </div>
  </Surface>
</template>
