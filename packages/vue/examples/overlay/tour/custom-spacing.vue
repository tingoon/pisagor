<script lang="ts" setup>
import { Button, Tour, type TourStepType } from "@pisagor/vue";

const steps: TourStepType[] = [
  {
    actions: [{ action: "next", label: "Next" }],
    description:
      "`Tour.Content` uses `[--space:--spacing(2)]` here for tighter padding than the default.",
    id: "step-1",
    title: "Custom spacing",
    type: "dialog",
  },
  {
    actions: [{ action: "dismiss", label: "Done" }],
    description:
      "You can pair `[--space]` with responsive variants, for example `md:[--space:--spacing(6)]`.",
    id: "step-2",
    title: "Breakpoint utilities",
    type: "dialog",
  },
];
</script>

<template>
  <Tour :class-names="{ content: '[--space:--spacing(2)]' }" :steps="steps">
    <template #trigger>
      <Button variant="outline">Open</Button>
    </template>
  </Tour>
</template>
