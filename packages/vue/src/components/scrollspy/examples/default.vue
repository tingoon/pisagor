<script lang="ts" setup >
import { Button, ScrollArea } from "@pisagor/vue";
import { ref } from "vue";
import { Scrollspy } from "..";

const parentRef = ref<HTMLElement | null>(null);
const verticalSections = [
  { id: "section-1", label: "Section 1" },
  { id: "section-2", label: "Section 2" },
  { id: "section-3", label: "Section 3" },
  { id: "section-4", label: "Section 4" },
  { id: "section-5", label: "Section 5" },
];
</script>

<template>
  <div class="flex w-full grow gap-5">
    <div class="flex w-37.5 flex-col gap-2">
      <Scrollspy class="flex flex-col gap-2.5" :offset="50" :target-ref="parentRef">
        <Button
          class="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
          variant="outline"
          v-for="item in verticalSections"
          :key="item.id"
          :data-scrollspy-anchor="item.id"
        >
          {{ item.label }}
        </Button>
      </Scrollspy>
    </div>

    <div class="grow" ref="parentRef" >
      <ScrollArea class="-me-5 h-125 grow pe-5">
        <div class="space-y-8">
          <div class="space-y-2.5" v-for="item in verticalSections" :key="item.id" :id="item.id" >
            <h3 class="text-base text-foreground">{{ item.label }}</h3>
            <div class="h-87.5 rounded-2xl bg-muted" />
          </div>
        </div>
      </ScrollArea>
    </div>
  </div>
</template>
