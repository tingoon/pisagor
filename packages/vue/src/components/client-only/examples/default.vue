<script lang="ts" setup >
import { ClientOnly } from "..";
</script>

<template>
        <ClientOnly>
          <div class="rounded-xl border bg-muted px-4 py-3 text-foreground text-sm">
            This content is only rendered on the client side.
          </div>
        </ClientOnly>
  
</template>
