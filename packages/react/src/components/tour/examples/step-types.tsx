import { Button } from "@pisagor/react";
import type { TourStepType } from "..";
import { Tour } from "..";
export function StepTypes() {
  const steps: TourStepType[] = [
    {
      actions: [{ action: "next", label: "Start tour" }],
      description:
        "This tour demonstrates different step types: dialog, tooltip, and floating.",
      id: "welcome",
      title: "Welcome",
      type: "dialog",
    },
    {
      actions: [
        { action: "prev", label: "Back" },
        { action: "next", label: "Next" },
      ],
      description:
        "This step appears as a tooltip anchored to a specific element.",
      id: "tooltip-step",
      target: () => document.querySelector<HTMLElement>("#tour-target-element"),
      title: "Tooltip step",
      type: "tooltip",
    },
    {
      actions: [
        { action: "prev", label: "Back" },
        { action: "next", label: "Next" },
      ],
      description:
        "This step floats at a fixed position on the screen, independent of any target.",
      id: "floating-step",
      placement: "bottom-end",
      title: "Floating step",
      type: "floating",
    },
    {
      actions: [{ action: "dismiss", label: "Done" }],
      description: "You have seen all the different step types available.",
      id: "complete",
      title: "Tour complete",
      type: "dialog",
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      <Tour steps={steps}>
        <Tour.Trigger asChild>
          <Button variant="outline">Start tour</Button>
        </Tour.Trigger>
        <div
          className="flex items-center justify-center rounded-lg border border-border bg-muted px-8 py-4 font-medium text-sm"
          id="tour-target-element"
        >
          Target element
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
