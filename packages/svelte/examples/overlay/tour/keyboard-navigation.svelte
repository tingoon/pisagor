<script lang="ts">
  import { Button, Tour, type TourStepDetails } from "@pisagor/svelte";
  import { KeyboardIcon } from "phosphor-svelte";

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
    {#snippet trigger(props)}
      <Button {...props()} variant="outline">Start tour</Button>
    {/snippet}

    <p class="text-muted-foreground flex items-center gap-2 text-sm">
      <KeyboardIcon class="size-4" />
      Use arrow keys to navigate, Escape to close
    </p>
    <div class="flex flex-wrap gap-2">
      {#each [1, 2, 3] as n}
        <div
          class="border-border bg-muted flex items-center justify-center rounded-lg border px-8 py-4 text-sm font-medium"
          id={`tour-key-${n}`}
        >
          Step {n}
        </div>
      {/each}
    </div>
  </Tour>
</div>
