<script lang="ts" setup>
import { Button, Tour, type TourStepType } from "@pisagor/vue";

const steps: TourStepType[] = [
  {
    actions: [{ action: "next", label: "Next" }],
    description: "This tour demonstrates loading data before showing a step.",
    id: "intro",
    title: "Async data loading",
    type: "dialog",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "next", label: "Next" },
    ],
    description: "Fetching user data...",
    effect({ show, update }) {
      const timer = window.setTimeout(() => {
        update({
          description: "You have 12 projects and 48 team members.",
          title: "Welcome, Jane Doe",
        });
        show();
      }, 800);

      return () => window.clearTimeout(timer);
    },
    id: "user-info",
    target: () => document.querySelector<HTMLElement>("#user-card"),
    title: "Loading...",
    type: "tooltip",
  },
  {
    actions: [{ action: "dismiss", label: "Done" }],
    description:
      "The async step loaded data from the GitHub API before displaying.",
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
        id="user-card"
      >
        User profile card
      </div>
    </Tour>
  </div>
</template>
