import { KeyboardIcon } from "@phosphor-icons/react";
import type { TourStepType } from "@pisagor/react";
import { Button, Tour } from "@pisagor/react";

export function KeyboardNavigation() {
  const steps: TourStepType[] = [
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

  return (
    <div className="flex flex-col gap-2">
      <Tour
        keyboardNavigation
        steps={steps}
        trigger={<Button variant="outline">Start tour</Button>}
      >
        <p className="text-muted-foreground flex items-center gap-2 text-sm">
          <KeyboardIcon className="size-4" />
          Use arrow keys to navigate, Escape to close
        </p>
        <div className="flex flex-wrap gap-2">
          <div
            className="border-border bg-muted flex items-center justify-center rounded-lg border px-8 py-4 text-sm font-medium"
            id="tour-key-1"
          >
            Step 1
          </div>
          <div
            className="border-border bg-muted flex items-center justify-center rounded-lg border px-8 py-4 text-sm font-medium"
            id="tour-key-2"
          >
            Step 2
          </div>
          <div
            className="border-border bg-muted flex items-center justify-center rounded-lg border px-8 py-4 text-sm font-medium"
            id="tour-key-3"
          >
            Step 3
          </div>
        </div>
      </Tour>
    </div>
  );
}
