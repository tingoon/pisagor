<script lang="ts" setup>
import { PhCaretDown } from "@phosphor-icons/vue";
import { Button, Collapsible } from "@pisagor/vue";
</script>

<template>
  <div>
    <Collapsible.Root disabled>
      <Collapsible.Trigger as-child>
        <Button class="w-full" variant="outline">
          Disabled collapsible
          <Collapsible.Indicator>
            <PhCaretDown />
          </Collapsible.Indicator>
        </Button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Collapsible.Body class="pt-2">
          <p class="text-muted-foreground text-sm">
            This content cannot be accessed because the collapsible is
            unavailable.
          </p>
        </Collapsible.Body>
      </Collapsible.Content>
    </Collapsible.Root>
  </div>
</template>
