<script lang="ts" setup>
import { Button, Tour, type TourStepType } from "@pisagor/vue";

const steps: TourStepType[] = [
  {
    actions: [{ action: "next", label: "Start tour" }],
    description:
      "This tour demonstrates different step types: dialog, tooltip, and floating.",
    id: "welcome",
    title: "Welcome",
    type: "dialog",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "next", label: "Next" },
    ],
    description: "This step appears",
    id: "tooltip-step",
    target: () => document.querySelector<HTMLElement>("#tour-target-element"),
    title: "Tooltip step",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "next", label: "Next" },
    ],
    description:
      "This step floats at a fixed position on the screen, independent of any target.",
    id: "floating-step",
    placement: "bottom-end",
    title: "Floating step",
    type: "floating",
  },
  {
    actions: [{ action: "dismiss", label: "Done" }],
    description: "You have seen all the different step types available.",
    id: "complete",
    title: "Tour complete",
    type: "dialog",
  },
];
</script>

<template>
  <div class="flex flex-col gap-2">
    <Tour :steps="steps">
      <template #trigger>
        <Button variant="outline">Start tour</Button>
      </template>
      <div
        class="border-border bg-muted flex items-center justify-center rounded-lg border px-8 py-4 text-sm font-medium"
        id="tour-target-element"
      >
        Target element
      </div>
    </Tour>
  </div>
</template>
