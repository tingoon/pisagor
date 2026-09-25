<script lang="ts" setup>
import { Button } from "@pisagor/vue";
import { ref } from "vue";
import { HoverCard } from "..";

const open = ref(false);
const onOpenChange = ({ open: isOpen }) => setOpen(isOpen);
</script>

<template>
  <div class="flex flex-col gap-2">
    <HoverCard :open="open" @open-change="onOpenChange">
      <HoverCard.Trigger as-child>
        <Button variant="outline">Hover here</Button>
      </HoverCard.Trigger>
      <HoverCard.Content>
        <div class="flex flex-col gap-1">
          <h4 class="font-medium">Controlled</h4>
          <p class="text-muted-foreground text-sm">
            The open state is managed externally with <code>open</code> and
            <code>onOpenChange</code>.
          </p>
        </div>
      </HoverCard.Content>
    </HoverCard>
    <p class="text-center text-muted-foreground text-sm">
      {{ open ? "✅" : "❌" }}
    </p>
  </div>
</template>
