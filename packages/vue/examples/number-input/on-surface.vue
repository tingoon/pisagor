<script lang="ts" setup>
import { NumberInput, Surface } from "@pisagor/vue";
</script>

<template>
  <Surface bordered padding="md" variant="default">
    <div class="flex flex-col gap-2">
      <NumberInput default-value="1" variant="primary" />
      <NumberInput default-value="1" variant="secondary" />
    </div>
  </Surface>
</template>
