import { waitForEvent } from "@ark-ui/react/tour";
import { Button } from "@pisagor/react";
import type { TourStepType } from "..";
import { Tour } from "..";
export function WaitForClick() {
  const steps: TourStepType[] = [
    {
      actions: [{ action: "next", label: "Begin" }],
      description:
        "This tour will guide you through actions. You must complete each step to proceed.",
      id: "intro",
      title: "Interactive tutorial",
      type: "dialog",
    },
    {
      description: "Select the add button to continue.",
      effect({ next, target, show }) {
        show();
        const [promise, cancel] = waitForEvent(target, "click");
        promise.then(() => next());
        return cancel;
      },
      id: "click-add",
      target: () => document.querySelector<HTMLElement>("#btn-add"),
      title: "Select the add button",
      type: "tooltip",
    },
    {
      description: "Select the edit button to continue.",
      effect({ next, target, show }) {
        show();
        const [promise, cancel] = waitForEvent(target, "click");
        promise.then(() => next());
        return cancel;
      },
      id: "click-edit",
      target: () => document.querySelector<HTMLElement>("#btn-edit"),
      title: "Select the edit button",
      type: "tooltip",
    },
    {
      description: "Select the delete button to continue.",
      effect({ next, target, show }) {
        show();
        const [promise, cancel] = waitForEvent(target, "click");
        promise.then(() => next());
        return cancel;
      },
      id: "click-delete",
      target: () => document.querySelector<HTMLElement>("#btn-delete"),
      title: "Select the delete button",
      type: "tooltip",
    },
    {
      actions: [{ action: "dismiss", label: "Finish" }],
      description: "You completed all the interactive steps.",
      id: "complete",
      title: "You're ready to continue",
      type: "dialog",
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      <Tour steps={steps}>
        <Tour.Trigger asChild>
          <Button variant="outline">Start interactive tour</Button>
        </Tour.Trigger>
        <div className="flex flex-wrap gap-2">
          <Button id="btn-add" size="sm" variant="outline">
            Add Item
          </Button>
          <Button id="btn-edit" size="sm" variant="outline">
            Edit
          </Button>
          <Button id="btn-delete" size="sm" variant="outline">
            Delete
          </Button>
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
