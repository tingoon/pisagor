<script lang="ts" setup>
import {
  Button,
  Tour,
  type TourStepType,
  useTour,
  useTourContext,
} from "@pisagor/vue";
import { defineComponent, h } from "vue";

const TourProgressBar = defineComponent({
  name: "TourProgressBar",
  setup() {
    const tour = useTourContext();

    return () =>
      h(
        "div",
        {
          class:
            "bg-muted absolute right-0 bottom-0 left-0 h-1 overflow-hidden rounded-b-2xl",
        },
        [
          h("div", {
            class: "bg-primary h-full transition-[width]",
            style: { width: `${tour.value.getProgressPercent()}%` },
          }),
        ],
      );
  },
});

const steps: TourStepType[] = [
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

const tour = useTour({ steps });
</script>

<template>
  <div class="flex flex-col gap-2">
    <Tour.Root :tour="tour">
      <Button variant="outline" @click="tour.start()">Start tour</Button>
      <div class="flex flex-wrap gap-2">
        <div
          v-for="index in 4"
          :id="`progress-${index}`"
          :key="index"
          class="bg-popover flex items-center justify-center rounded-md border px-6 py-4 font-medium"
        >
          Step {{ index }}
        </div>
      </div>
      <Teleport to="body">
        <Tour.Backdrop />
        <Tour.Spotlight />
        <Tour.Positioner>
          <Tour.Content>
            <Tour.Header>
              <Tour.ProgressText />
              <Tour.Title />
              <Tour.Description />
            </Tour.Header>
            <Tour.Control v-if="tour.step?.actions?.length">
              <Tour.ActionTrigger
                v-for="action in tour.step.actions"
                :key="action.label"
                :action="action"
                as-child
              >
                <Button
                  size="sm"
                  :variant="action.action === 'next' ? 'default' : 'outline'"
                >
                  {{ action.label }}
                </Button>
              </Tour.ActionTrigger>
            </Tour.Control>
            <TourProgressBar />
          </Tour.Content>
        </Tour.Positioner>
      </Teleport>
    </Tour.Root>
  </div>
</template>
