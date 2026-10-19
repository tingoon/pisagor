<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { Button, Tour, type TourStepDetails, useTour } from "@pisagor/svelte";
  import TourProgressBar from "./tour-progress-bar.svelte";

  const steps: TourStepDetails[] = [
    {
      actions: [{ action: "next", label: "Next" }],
      description: "Watch the progress bar at the bottom as you navigate.",
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

<div class="flex flex-col gap-2">
  <Tour.Root {tour}>
    <Button onclick={() => tour().start()} variant="outline">Start tour</Button>
    <div class="flex flex-wrap gap-2">
      {#each [1, 2, 3, 4] as n}
        <div
          class="bg-popover flex items-center justify-center rounded-md border px-6 py-4 font-medium"
          id={`progress-${n}`}
        >
          Step {n}
        </div>
      {/each}
    </div>
    <Portal>
      <Tour.Backdrop />
      <Tour.Spotlight />
      <Tour.Positioner>
        <Tour.Content>
          <Tour.Header>
            <Tour.ProgressText />
            <Tour.Title />
            <Tour.Description />
          </Tour.Header>
          <Tour.Actions>
            {#snippet children(actions)}
              <Tour.Control>
                {#each actions() as action (action.label)}
                  <Tour.ActionTrigger {action}>
                    {#snippet asChild(props)}
                      <Button
                        {...props()}
                        size="sm"
                        variant={action.action === "next"
                          ? "default"
                          : "outline"}
                      >
                        {action.label}
                      </Button>
                    {/snippet}
                  </Tour.ActionTrigger>
                {/each}
              </Tour.Control>
            {/snippet}
          </Tour.Actions>
          <TourProgressBar />
        </Tour.Content>
      </Tour.Positioner>
    </Portal>
  </Tour.Root>
</div>
