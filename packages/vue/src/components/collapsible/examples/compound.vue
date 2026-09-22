<script setup lang="ts">
import { Collapsible } from "..";
</script>

<template>
        <Collapsible default-open class="w-96 rounded-xl border bg-card p-4">
          <Collapsible.Trigger class="flex w-full items-center justify-between font-medium text-sm">
            Details
            <Collapsible.Indicator />
          </Collapsible.Trigger>
          <Collapsible.Content class="pt-3 text-muted-foreground text-sm">
            Manual composition with Collapsible.Root and subparts.
          </Collapsible.Content>
        </Collapsible>
  
</template>
