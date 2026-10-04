<script lang="ts">
import { Button } from "@pisagor/svelte";
import { Tour, type TourStepDetails } from "@pisagor/svelte/tour";

const steps: TourStepDetails[] = [
  {
    actions: [{ action: "next", label: "Next" }],
    description: "Watch the event log below as you navigate.",
    id: "step-1",
    target: () => document.querySelector<HTMLElement>("#event-1"),
    title: "First step",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "next", label: "Next" },
    ],
    description: "Each step change triggers an event.",
    id: "step-2",
    target: () => document.querySelector<HTMLElement>("#event-2"),
    title: "Second step",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "dismiss", label: "Finish" },
    ],
    description: "Complete the tour to see the status change.",
    id: "step-3",
    target: () => document.querySelector<HTMLElement>("#event-3"),
    title: "Final step",
    type: "tooltip",
  },
];

let logs = $state<{ id: number; message: string }[]>([]);
let nextLogId = 0;

const addLog = (message: string) => {
  nextLogId += 1;
  logs = [...logs, { id: nextLogId, message }];
};
</script>

<div class="flex flex-col gap-2">
  <Tour
    onStatusChange={(details) => addLog(`Status: ${details.status}`)}
    onStepChange={(details) => addLog(`Step changed: ${details.stepId ?? "unknown"}`)}
    {steps}
  >
    <Tour.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">Start tour</Button>
      {/snippet}
    </Tour.Trigger>
    <div class="flex flex-wrap gap-2">
      <div class="flex items-center justify-center rounded-md border bg-popover px-6 py-4 font-medium" id="event-1">Step 1</div>
      <div class="flex items-center justify-center rounded-md border bg-popover px-6 py-4 font-medium" id="event-2">Step 2</div>
      <div class="flex items-center justify-center rounded-md border bg-popover px-6 py-4 font-medium" id="event-3">Step 3</div>
    </div>
    <div class="flex h-32 flex-col gap-1 overflow-y-auto rounded-md border bg-muted p-3 font-mono text-muted-foreground text-xs">
      <strong>Event Log:</strong>
      {#if logs.length === 0}
        <span>Start the tour to see events</span>
      {:else}
        {#each logs as log}
          <span>{log.message}</span>
        {/each}
      {/if}
    </div>
    <Tour.Content>
      <Tour.Header>
        <Tour.ProgressText />
        <Tour.Title />
        <Tour.Description />
      </Tour.Header>
      <Tour.Footer>
        <Tour.Actions />
      </Tour.Footer>
    </Tour.Content>
  </Tour>
</div>
