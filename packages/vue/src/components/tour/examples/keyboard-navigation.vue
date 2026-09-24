<script lang="ts" setup>
import { PhKeyboard } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { Tour } from "..";

const steps = [
  {
    actions: [{ action: "next", label: "Next" }],
    description: "Press the right arrow key (→) to go to the next step.",
    id: "step-1",
    target: () => document.querySelector<HTMLElement>("#tour-key-1"),
    title: "Keyboard navigation",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "next", label: "Next" },
    ],
    description: "Press the left arrow key (←) to go back.",
    id: "step-2",
    target: () => document.querySelector<HTMLElement>("#tour-key-2"),
    title: "Go back",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "dismiss", label: "Finish" },
    ],
    description: "Press Escape to close the tour at any time.",
    id: "step-3",
    target: () => document.querySelector<HTMLElement>("#tour-key-3"),
    title: "Close tour",
    type: "tooltip",
  },
];
</script>

<template>
  <div class="flex flex-col gap-2">
    <Tour keyboard-navigation :steps="steps">
      <Tour.Trigger as-child>
        <Button variant="outline">Start tour</Button>
      </Tour.Trigger>
      <p class="flex items-center gap-2 text-muted-foreground text-sm">
        <PhKeyboard class="size-4" />
        Use arrow keys to navigate, Escape to close
      </p>
      <div class="flex flex-wrap gap-2">
        <div
          class="flex items-center justify-center rounded-lg border border-border bg-muted px-8 py-4 font-medium text-sm"
          id="tour-key-1"
        >
          Step 1
        </div>
        <div
          class="flex items-center justify-center rounded-lg border border-border bg-muted px-8 py-4 font-medium text-sm"
          id="tour-key-2"
        >
          Step 2
        </div>
        <div
          class="flex items-center justify-center rounded-lg border border-border bg-muted px-8 py-4 font-medium text-sm"
          id="tour-key-3"
        >
          Step 3
        </div>
      </div>
      <Tour.Content>
        <Tour.Header>
          <Tour.ProgressText />
          <Tour.Title />
          <Tour.Description />
        </Tour.Header>
        <Tour.Actions />
      </Tour.Content>
    </Tour>
  </div>
</template>
