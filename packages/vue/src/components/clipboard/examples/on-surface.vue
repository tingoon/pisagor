<script setup lang="ts">
import { Surface } from "@pisagor/vue";
import { Clipboard } from "..";
</script>

<template>
        <Surface bordered padding="md" variant="default">
          <div class="flex flex-wrap items-center gap-2">
            <Clipboard value="https://example.com/docs" variant="input" />
            <Clipboard value="https://example.com/docs" variant="button" />
            <Clipboard value="https://example.com/docs" variant="value" />
          </div>
        </Surface>
  
</template>
