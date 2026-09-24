<script lang="ts" setup>
import { ClientOnly } from "..";
</script>

<template>
  <ClientOnly>
    <div class="rounded-xl border bg-muted px-4 py-3 text-foreground text-sm">
      Current time: {{ now }}
    </div>
    <template #fallback>
      <div
        class="rounded-xl border border-dashed bg-muted/50 px-4 py-3 text-muted-foreground text-sm"
      >
        Loading…
      </div>
    </template>
  </ClientOnly>
</template>
