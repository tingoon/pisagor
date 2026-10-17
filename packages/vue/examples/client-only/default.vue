<script lang="ts">
import source from "./default.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { ClientOnly } from "@pisagor/vue";
</script>

<template>
  <ClientOnly>
    <div class="bg-muted text-foreground rounded-xl border px-4 py-3 text-sm">
      This content is only rendered on the client side.
    </div>
  </ClientOnly>
</template>
