<script lang="ts" setup>
import { Surface } from "..";
</script>

<template>
  <Surface bordered class="flex flex-col gap-4" padding="lg">
    <div>
      <h3 class="font-semibold text-sm">Outer surface</h3>
      <p class="text-muted-foreground text-sm">Explicit default variant at depth 0.</p>
    </div>
    <Surface bordered class="flex flex-col gap-2" padding="md">
      <h4 class="font-medium text-sm">Nested surface</h4>
      <p class="text-muted-foreground text-sm">
        Auto-resolves to secondary at depth 1 when variant is omitted.
      </p>
      <Surface bordered class="flex flex-col gap-2" padding="sm">
        <h5 class="font-medium text-sm">Deeply nested</h5>
        <p class="text-muted-foreground text-sm">Auto-resolves to tertiary at depth 2.</p>
      </Surface>
    </Surface>
  </Surface>
</template>
