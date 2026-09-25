<script lang="ts" setup>
import { Collapsible } from "..";
</script>

<template>
  <Collapsible class="w-96 rounded-xl border bg-card p-4" default-open>
    <Collapsible.Trigger
      class="flex w-full items-center justify-between font-medium text-sm"
    >
      Details
      <Collapsible.Indicator />
    </Collapsible.Trigger>
    <Collapsible.Content class="pt-3 text-muted-foreground text-sm">
      Manual composition with Collapsible.Root and subparts.
    </Collapsible.Content>
  </Collapsible>
</template>
