<script lang="ts" setup >
import { Button } from "@pisagor/vue";
import { ref } from "vue";
import { Collapsible } from "..";

const open = ref(false);
</script>

<template>
        <div class="w-64 space-y-2">
          <Collapsible v-model:open="open">
            <Collapsible.Trigger as-child>
              <Button class="w-full" variant="outline">
                {{ open ? 'Collapse' : 'Expand' }}
                <Collapsible.Indicator />
              </Button>
            </Collapsible.Trigger>
            <Collapsible.Content class="p-2">
              <p class="text-muted-foreground text-sm">
                This collapsible is controlled. The state is managed externally.
              </p>
            </Collapsible.Content>
          </Collapsible>
          <p class="text-center text-muted-foreground text-sm">{{ open ? '✅' : '❌' }}</p>
        </div>
  
</template>
