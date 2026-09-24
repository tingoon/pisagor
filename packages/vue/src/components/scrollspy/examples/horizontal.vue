<script lang="ts" setup>
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
          class="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
          variant="outline"
          v-for="item in horizontalSections"
          :key="item.id"
          :data-scrollspy-anchor="item.id"
        >
          {{ item.label }}
        </Button>
      </Scrollspy>
    </div>

    <div class="w-full" ref="parentRef">
      <ScrollArea class="h-100 grow">
        <div class="space-y-8">
          <div class="space-y-2.5" v-for="item in horizontalSections" :key="item.id" :id="item.id">
            <h3 class="text-base text-foreground">{{ item.label }}</h3>
            <div class="h-87.5 rounded-2xl bg-muted" />
          </div>
        </div>
      </ScrollArea>
    </div>
  </div>
</template>
