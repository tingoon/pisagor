<script lang="ts" setup>
import { PhCaretDown } from "@phosphor-icons/vue";
import { Collapsible } from "@pisagor/vue";
</script>

<template>
  <div class="bg-card w-96 rounded-xl border p-4">
    <Collapsible.Root>
      <Collapsible.Trigger
        class="flex w-full items-center justify-between text-sm font-medium"
      >
        Total visits
        <Collapsible.Indicator>
          <PhCaretDown />
        </Collapsible.Indicator>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Collapsible.Body class="text-muted-foreground pt-3 text-sm">
          <p>Google 22.3%</p>
          <p>Facebook -10.1%</p>
          <p>TikTok 6.8%</p>
        </Collapsible.Body>
      </Collapsible.Content>
    </Collapsible.Root>
  </div>
</template>
