<script lang="ts" setup>
import { ClientOnly } from "@pisagor/vue";

const now = new Date().toLocaleTimeString();
</script>

<template>
  <ClientOnly>
    <div class="bg-muted text-foreground rounded-xl border px-4 py-3 text-sm">
      Current time: {{ now }}
    </div>
    <template #fallback>
      <div
        class="bg-muted/50 text-muted-foreground rounded-xl border border-dashed px-4 py-3 text-sm"
      >
        Loading…
      </div>
    </template>
  </ClientOnly>
</template>
