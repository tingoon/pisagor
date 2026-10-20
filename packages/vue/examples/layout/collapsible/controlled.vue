<script lang="ts" setup>
import { PhCaretDown } from "@phosphor-icons/vue";
import { Button, Collapsible } from "@pisagor/vue";
import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <div class="w-64 space-y-2">
    <Collapsible.Root v-model:open="open">
      <Collapsible.Trigger as-child>
        <Button class="w-full" variant="outline">
          {{ open ? "Collapse" : "Expand" }}
          <Collapsible.Indicator>
            <PhCaretDown />
          </Collapsible.Indicator>
        </Button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Collapsible.Body class="p-2">
          <p class="text-muted-foreground text-sm">
            This collapsible is controlled. The state is managed externally.
          </p>
        </Collapsible.Body>
      </Collapsible.Content>
    </Collapsible.Root>
    <p class="text-muted-foreground text-center text-sm">
      {{ open ? "✅" : "❌" }}
    </p>
  </div>
</template>
