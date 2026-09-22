<script setup lang="ts">
import { Surface } from "@pisagor/vue";
import { NumberInput } from "..";
</script>

<template>
        <Surface bordered padding="md" variant="default">
          <div class="flex flex-col gap-2">
            <NumberInput default-value="1" variant="primary" />
            <NumberInput default-value="1" variant="secondary" />
          </div>
        </Surface>
  
</template>
