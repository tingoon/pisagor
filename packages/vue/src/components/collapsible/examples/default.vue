<script setup lang="ts">
import { Collapsible } from "..";
</script>

<template>
        <div class="w-96 rounded-xl border bg-card p-4">
          <Collapsible>
            <Collapsible.Trigger class="flex w-full items-center justify-between font-medium text-sm">
              Total visits
              <Collapsible.Indicator />
            </Collapsible.Trigger>
            <Collapsible.Content class="pt-3 text-muted-foreground text-sm">
              <p>Google 22.3%</p>
              <p>Facebook -10.1%</p>
              <p>TikTok 6.8%</p>
            </Collapsible.Content>
          </Collapsible>
        </div>
  
</template>
