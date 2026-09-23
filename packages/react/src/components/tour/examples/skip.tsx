import { Button } from "@pisagor/react";
import type { TourStepType } from "..";
import { Tour } from "..";
export function Skip() {
  const steps: TourStepType[] = [
    {
      actions: [
        { action: "dismiss", label: "Skip" },
        { action: "next", label: "Next" },
      ],
      description: "You can skip this tour at any time using the Skip button.",
      id: "step-1",
      target: () => document.querySelector<HTMLElement>("#tour-item-1"),
      title: "First feature",
      type: "tooltip",
    },
    {
      actions: [
        { action: "dismiss", label: "Skip" },
        { action: "prev", label: "Back" },
        { action: "next", label: "Next" },
      ],
      description: "Continue or skip to end the tour early.",
      id: "step-2",
      target: () => document.querySelector<HTMLElement>("#tour-item-2"),
      title: "Second feature",
      type: "tooltip",
    },
    {
      actions: [
        { action: "prev", label: "Back" },
        { action: "dismiss", label: "Finish" },
      ],
      description: "This is the last step of the tour.",
      id: "step-3",
      target: () => document.querySelector<HTMLElement>("#tour-item-3"),
      title: "Final feature",
      type: "tooltip",
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      <Tour steps={steps}>
        <Tour.Trigger asChild>
          <Button variant="outline">Start tour</Button>
        </Tour.Trigger>
        <div className="flex flex-wrap gap-2">
          <div
            className="flex items-center justify-center rounded-lg border border-border bg-muted px-8 py-4 font-medium text-sm"
            id="tour-item-1"
          >
            Item 1
          </div>
          <div
            className="flex items-center justify-center rounded-lg border border-border bg-muted px-8 py-4 font-medium text-sm"
            id="tour-item-2"
          >
            Item 2
          </div>
          <div
            className="flex items-center justify-center rounded-lg border border-border bg-muted px-8 py-4 font-medium text-sm"
            id="tour-item-3"
          >
            Item 3
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
  );
}
