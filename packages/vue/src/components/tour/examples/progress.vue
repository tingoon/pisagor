<script lang="ts" setup>
import { Button, useTourContext } from "@pisagor/vue";
import { defineComponent, h, toValue } from "vue";
import { Tour } from "..";

const TourProgressBar = defineComponent({
  name: "TourProgressBar",
  setup() {
    return () => {
      const ctx = toValue(useTourContext());
      if (!ctx) return null;
      const { tour } = ctx;

      return h(
        "div",
        { class: "absolute right-0 bottom-0 left-0 h-1 overflow-hidden rounded-b-2xl bg-muted" },
        [
          h("div", {
            class: "h-full bg-primary transition-[width]",
            style: { width: `${tour.getProgressPercent()}%` },
          }),
        ],
      );
    };
  },
});
const steps = [
  {
    actions: [{ action: "next", label: "Next" }],
    description: "Watch the progress bar at the bottom",
    id: "step-1",
    target: () => document.querySelector<HTMLElement>("#progress-1"),
    title: "Progress tracking",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "next", label: "Next" },
    ],
    description: "The progress bar shows how far along you are.",
    id: "step-2",
    target: () => document.querySelector<HTMLElement>("#progress-2"),
    title: "Halfway there",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "next", label: "Next" },
    ],
    description: "One more step to complete the tour.",
    id: "step-3",
    target: () => document.querySelector<HTMLElement>("#progress-3"),
    title: "Almost done",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "dismiss", label: "Finish" },
    ],
    description: "You have completed all the steps.",
    id: "step-4",
    target: () => document.querySelector<HTMLElement>("#progress-4"),
    title: "Tour complete",
    type: "tooltip",
  },
];
</script>

<template>
  <div class="flex flex-col gap-2">
    <Tour :steps="steps">
      <Tour.Trigger as-child>
        <Button variant="outline">Start tour</Button>
      </Tour.Trigger>
      <div class="flex flex-wrap gap-2">
        <div
          class="flex items-center justify-center rounded-md border bg-popover px-6 py-4 font-medium"
          id="progress-1"
        >
          Step 1
        </div>
        <div
          class="flex items-center justify-center rounded-md border bg-popover px-6 py-4 font-medium"
          id="progress-2"
        >
          Step 2
        </div>
        <div
          class="flex items-center justify-center rounded-md border bg-popover px-6 py-4 font-medium"
          id="progress-3"
        >
          Step 3
        </div>
        <div
          class="flex items-center justify-center rounded-md border bg-popover px-6 py-4 font-medium"
          id="progress-4"
        >
          Step 4
        </div>
      </div>
      <Tour.Content>
        <Tour.Header>
          <Tour.ProgressText />
          <Tour.Title />
          <Tour.Description />
        </Tour.Header>
        <Tour.Actions />

        <TourProgressBar />
      </Tour.Content>
    </Tour>
  </div>
</template>
