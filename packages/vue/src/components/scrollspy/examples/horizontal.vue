<script setup lang="ts">
import { Button, ScrollArea } from "@pisagor/vue";
import { ref } from "vue";
import { Scrollspy } from "..";

const parentRef = ref<HTMLElement | null>(null);
const horizontalSections = [
  { id: "section-6", label: "Section 1" },
  { id: "section-7", label: "Section 2" },
  { id: "section-8", label: "Section 3" },
  { id: "section-9", label: "Section 4" },
  { id: "section-10", label: "Section 5" },
];
</script>

<template>
  <div class="w-full space-y-5">
    <div class="flex w-full gap-2">
      <Scrollspy class="flex gap-2.5" :offset="50" :target-ref="parentRef">
        <Button
          v-for="item in horizontalSections"
          :key="item.id"
          class="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
          :data-scrollspy-anchor="item.id"
          variant="outline"
        >
          {{ item.label }}
        </Button>
      </Scrollspy>
    </div>

    <div ref="parentRef" class="w-full">
      <ScrollArea class="h-[400px] grow">
        <div class="space-y-8">
          <div v-for="item in horizontalSections" :id="item.id" :key="item.id" class="space-y-2.5">
            <h3 class="text-base text-foreground">{{ item.label }}</h3>
            <div class="h-[350px] rounded-2xl bg-muted" />
          </div>
        </div>
      </ScrollArea>
    </div>
  </div>
</template>
