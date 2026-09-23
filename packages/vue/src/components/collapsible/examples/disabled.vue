<script lang="ts" setup >
import { Button } from "@pisagor/vue";
import { Collapsible } from "..";
</script>

<template>
        <div>
          <Collapsible disabled>
            <Collapsible.Trigger as-child>
              <Button class="w-full" variant="outline">
                Disabled collapsible
                <Collapsible.Indicator />
              </Button>
            </Collapsible.Trigger>
            <Collapsible.Content class="pt-2">
              <p class="text-muted-foreground text-sm">
                This content cannot be accessed because the collapsible is unavailable.
              </p>
            </Collapsible.Content>
          </Collapsible>
        </div>
  
</template>
