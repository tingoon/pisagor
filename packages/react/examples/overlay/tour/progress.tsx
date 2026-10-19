import { Portal } from "@ark-ui/react";
import type { TourStepType } from "@pisagor/react";
import { Button, Tour, useTour, useTourContext } from "@pisagor/react";

export function Progress() {
  const TourProgressBar = () => {
    const tour = useTourContext();

    return (
      <div className="bg-muted absolute right-0 bottom-0 left-0 h-1 overflow-hidden rounded-b-2xl">
        <div
          className="bg-primary h-full transition-[width]"
          style={{ width: `${tour.getProgressPercent()}%` }}
        />
      </div>
    );
  };

  const steps: TourStepType[] = [
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

  return (
    <div className="flex flex-col gap-2">
      <Tour.Root tour={tour}>
        <Button onClick={() => tour.start()} variant="outline">
          Start tour
        </Button>
        <div className="flex flex-wrap gap-2">
          <div
            className="bg-popover flex items-center justify-center rounded-md border px-6 py-4 font-medium"
            id="progress-1"
          >
            Step 1
          </div>
          <div
            className="bg-popover flex items-center justify-center rounded-md border px-6 py-4 font-medium"
            id="progress-2"
          >
            Step 2
          </div>
          <div
            className="bg-popover flex items-center justify-center rounded-md border px-6 py-4 font-medium"
            id="progress-3"
          >
            Step 3
          </div>
          <div
            className="bg-popover flex items-center justify-center rounded-md border px-6 py-4 font-medium"
            id="progress-4"
          >
            Step 4
          </div>
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
                {(actions) => (
                  <Tour.Control>
                    {actions.map((action) => (
                      <Tour.ActionTrigger
                        action={action}
                        asChild
                        key={action.label}
                      >
                        <Button
                          size="sm"
                          variant={
                            action.action === "next" ? "default" : "outline"
                          }
                        >
                          {action.label}
                        </Button>
                      </Tour.ActionTrigger>
                    ))}
                  </Tour.Control>
                )}
              </Tour.Actions>
              <TourProgressBar />
            </Tour.Content>
          </Tour.Positioner>
        </Portal>
      </Tour.Root>
    </div>
  );
}
