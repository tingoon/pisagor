<script lang="ts" setup>
import { Button, HoverCard } from "@pisagor/vue";
import { ref } from "vue";

const open = ref(false);
function onOpenChange(details: { open: boolean }) {
  open.value = details.open;
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <HoverCard :open="open" @open-change="onOpenChange">
      <template #trigger>
        <Button variant="outline">Hover here</Button>
      </template>
      <div class="flex flex-col gap-1">
        <h4 class="font-medium">Controlled</h4>
        <p class="text-muted-foreground text-sm">
          The open state is managed externally with <code>open</code> and
          <code>onOpenChange</code>.
        </p>
      </div>
    </HoverCard>
    <p class="text-muted-foreground text-center text-sm">
      {{ open ? "✅" : "❌" }}
    </p>
  </div>
</template>
