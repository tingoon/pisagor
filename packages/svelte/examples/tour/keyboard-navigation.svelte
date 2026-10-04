<script lang="ts">
import { Button, Tour, type TourStepDetails } from "@pisagor/svelte";
import KeyboardIcon from "phosphor-svelte/lib/KeyboardIcon";

const steps: TourStepDetails[] = [
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

<div class="flex flex-col gap-2">
  <Tour keyboardNavigation {steps}>
    <Tour.Trigger>
      {#snippet asChild(
        props,
      )}
        <Button {...props()} variant="outline">Start tour</Button>
      {/snippet}
    </Tour.Trigger>
    <p class="flex items-center gap-2 text-muted-foreground text-sm">
      <KeyboardIcon class="size-4" />
      Use arrow keys to navigate, Escape to close
    </p>
    <div class="flex flex-wrap gap-2">
      {#each [1, 2, 3] as n}
        <div
          class="flex items-center justify-center rounded-lg border border-border bg-muted px-8 py-4 font-medium text-sm"
          id={`tour-key-${n}`}
        >
          Step {n}
        </div>
      {/each}
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
