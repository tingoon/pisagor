<script lang="ts" setup>
import { Steps } from "@pisagor/vue";
import { h } from "vue";

const panel = "flex h-full items-center justify-center rounded-md border";

const items = [1, 2, 3].map((step) => ({
  content: () =>
    h("p", { class: "text-muted-foreground text-sm" }, `Step ${step}`),
  value: `step-${step}`,
}));
</script>

<template>
  <Steps
    class="size-full"
    :class-names="{ completedContent: panel, content: panel }"
    :items="items"
  >
    <template #completed>
      <p class="text-muted-foreground text-sm">All steps completed.</p>
    </template>
  </Steps>
</template>
