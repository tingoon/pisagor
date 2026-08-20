import { waitForElement, waitForEvent } from "@ark-ui/react/tour";
import { KeyboardIcon, PlusIcon } from "@phosphor-icons/react";
import type { TourStepType } from "@pisagor/react";
import { Button, Checkbox, Field, Input, Tour, useTourContext } from "@pisagor/react";
import { useRef, useState } from "react";
import preview from "#/react/preview";

const meta = preview.meta({
  component: Tour,
  parameters: {
    docs: {
      api: "compound",
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
      description: {
        component:
          "Walks new users through key parts of the interface step by step with guided highlights.",
      },
      taxonomy: "pattern",
    },
  },
  subcomponents: {
    Actions: Tour.Actions,
    ActionTrigger: Tour.ActionTrigger,
    Body: Tour.Body,
    Close: Tour.Close,
    Content: Tour.Content,
    Description: Tour.Description,
    Footer: Tour.Footer,
    Header: Tour.Header,
    NextStep: Tour.NextStep,
    Overlay: Tour.Overlay,
    Positioner: Tour.Positioner,
    PreviousStep: Tour.PreviousStep,
    ProgressText: Tour.ProgressText,
    Spotlight: Tour.Spotlight,
    Title: Tour.Title,
    Trigger: Tour.Trigger,
  },
  title: "Components/Overlay/Tour",
});

export const Default = meta.story({
  render: () => {
    const steps: TourStepType[] = [
      {
        actions: [{ action: "next" as const, label: "Start tour" }],
        description: "You gonna learn how to use to install and use the component.",
        id: "step-1",
        title: "Welcome to the tour",
        type: "dialog",
      },
      {
        actions: [
          { action: "prev" as const, label: "Previous" },
          { action: "next" as const, label: "Next" },
        ],
        description: "Let's take a quick tour of the documentation site to help you get started。",
        id: "step-2",
        target: () => document.querySelector("#installation"),
        title: "Installation step",
        type: "tooltip",
      },
      {
        actions: [
          { action: "prev" as const, label: "Previous" },
          { action: "next" as const, label: "Next" },
        ],
        description: "This is how to use the component.",
        id: "step-3",
        target: () => document.querySelector("#usage"),
        title: "Usage step",
        type: "tooltip",
      },
      {
        actions: [{ action: "dismiss" as const, label: "Finish tour" }],
        description: "You've completed the tour. Thank you for your time.",
        id: "step-4",
        title: "Tour complete",
        type: "dialog",
      },
    ];
    return (
      <Tour steps={steps}>
        <Tour.Trigger asChild>
          <Button variant="outline">Open</Button>
        </Tour.Trigger>
        <Tour.Content>
          <Tour.Header>
            <Tour.ProgressText />
            <Tour.Title />
            <Tour.Description />
          </Tour.Header>
          <Tour.Footer>
            <Tour.PreviousStep />
            <Tour.NextStep />
          </Tour.Footer>
        </Tour.Content>
      </Tour>
    );
  },
});

export const CustomSpacing = meta.story({
  render: () => {
    const steps: TourStepType[] = [
      {
        actions: [{ action: "next" as const, label: "Next" }],
        description:
          "`Tour.Content` uses `[--space:--spacing(2)]` here for tighter padding than the default.",
        id: "step-1",
        title: "Custom spacing",
        type: "dialog",
      },
      {
        actions: [{ action: "dismiss" as const, label: "Done" }],
        description:
          "You can pair `[--space]` with responsive variants, for example `md:[--space:--spacing(6)]`.",
        id: "step-2",
        title: "Breakpoint utilities",
        type: "dialog",
      },
    ];
    return (
      <Tour steps={steps}>
        <Tour.Trigger asChild>
          <Button variant="outline">Open</Button>
        </Tour.Trigger>
        <Tour.Content className="[--space:--spacing(2)]">
          <Tour.Header>
            <Tour.ProgressText />
            <Tour.Title />
            <Tour.Description />
          </Tour.Header>
          <Tour.Footer>
            <Tour.PreviousStep />
            <Tour.NextStep />
          </Tour.Footer>
        </Tour.Content>
      </Tour>
    );
  },
});

export const Async = meta.story({
  render: () => {
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
        description: "The async step loaded data from the GitHub API before displaying.",
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
            id="user-card"
          >
            User profile card
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
  },
});

export const Events = meta.story({
  render: () => {
    const steps: TourStepType[] = [
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
    const [logs, setLogs] = useState<{ id: number; message: string }[]>([]);
    const nextLogId = useRef(0);

    const addLog = (message: string) => {
      nextLogId.current += 1;
      setLogs((prev) => [...prev, { id: nextLogId.current, message }]);
    };

    return (
      <div className="flex flex-col gap-2">
        <Tour
          onStatusChange={(details) => addLog(`Status: ${details.status}`)}
          onStepChange={(details) => addLog(`Step changed: ${details.stepId ?? "unknown"}`)}
          steps={steps}
        >
          <Tour.Trigger asChild>
            <Button variant="outline">Start tour</Button>
          </Tour.Trigger>
          <div className="flex flex-wrap gap-2">
            <div
              className="flex items-center justify-center rounded-md border bg-popover px-6 py-4 font-medium"
              id="event-1"
            >
              Step 1
            </div>
            <div
              className="flex items-center justify-center rounded-md border bg-popover px-6 py-4 font-medium"
              id="event-2"
            >
              Step 2
            </div>
            <div
              className="flex items-center justify-center rounded-md border bg-popover px-6 py-4 font-medium"
              id="event-3"
            >
              Step 3
            </div>
          </div>
          <div className="flex h-32 flex-col gap-1 overflow-y-auto rounded-md border bg-muted p-3 font-mono text-muted-foreground text-xs">
            <strong>Event Log:</strong>
            {logs.length === 0 ? (
              <span>Start the tour to see events</span>
            ) : (
              logs.map((log) => <span key={log.id}>{log.message}</span>)
            )}
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
    );
  },
});

export const KeyboardNavigation = meta.story({
  render: () => {
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
        <Tour keyboardNavigation steps={steps}>
          <Tour.Trigger asChild>
            <Button variant="outline">Start tour</Button>
          </Tour.Trigger>
          <p className="flex items-center gap-2 text-muted-foreground text-sm">
            <KeyboardIcon className="size-4" />
            Use arrow keys to navigate, Escape to close
          </p>
          <div className="flex flex-wrap gap-2">
            <div
              className="flex items-center justify-center rounded-lg border border-border bg-muted px-8 py-4 font-medium text-sm"
              id="tour-key-1"
            >
              Step 1
            </div>
            <div
              className="flex items-center justify-center rounded-lg border border-border bg-muted px-8 py-4 font-medium text-sm"
              id="tour-key-2"
            >
              Step 2
            </div>
            <div
              className="flex items-center justify-center rounded-lg border border-border bg-muted px-8 py-4 font-medium text-sm"
              id="tour-key-3"
            >
              Step 3
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
  },
});

export const Progress = meta.story({
  render: () => {
    const TourProgressBar = () => {
      const { tour } = useTourContext();
      return (
        <div className="absolute right-0 bottom-0 left-0 h-1 overflow-hidden rounded-b-2xl bg-muted">
          <div
            className="h-full bg-primary transition-[width]"
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
    return (
      <div className="flex flex-col gap-2">
        <Tour steps={steps}>
          <Tour.Trigger asChild>
            <Button variant="outline">Start tour</Button>
          </Tour.Trigger>
          <div className="flex flex-wrap gap-2">
            <div
              className="flex items-center justify-center rounded-md border bg-popover px-6 py-4 font-medium"
              id="progress-1"
            >
              Step 1
            </div>
            <div
              className="flex items-center justify-center rounded-md border bg-popover px-6 py-4 font-medium"
              id="progress-2"
            >
              Step 2
            </div>
            <div
              className="flex items-center justify-center rounded-md border bg-popover px-6 py-4 font-medium"
              id="progress-3"
            >
              Step 3
            </div>
            <div
              className="flex items-center justify-center rounded-md border bg-popover px-6 py-4 font-medium"
              id="progress-4"
            >
              Step 4
            </div>
          </div>
          <Tour.Content>
            <Tour.Header>
              <Tour.ProgressText />
              <Tour.Title />
              <Tour.Description />
            </Tour.Header>
            <Tour.Actions />

            <TourProgressBar />
          </Tour.Content>
        </Tour>
      </div>
    );
  },
});

export const Skip = meta.story({
  render: () => {
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
  },
});

export const StepTypes = meta.story({
  render: () => {
    const steps: TourStepType[] = [
      {
        actions: [{ action: "next", label: "Start tour" }],
        description: "This tour demonstrates different step types: dialog, tooltip, and floating.",
        id: "welcome",
        title: "Welcome",
        type: "dialog",
      },
      {
        actions: [
          { action: "prev", label: "Back" },
          { action: "next", label: "Next" },
        ],
        description: "This step appears as a tooltip anchored to a specific element.",
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
  },
});

export const WaitForClick = meta.story({
  render: () => {
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
  },
});

export const WaitForElement = meta.story({
  render: () => {
    const steps: TourStepType[] = [
      {
        actions: [{ action: "next", label: "Start" }],
        description: "This tour demonstrates waiting for elements that appear dynamically.",
        id: "intro",
        title: "Dynamic elements",
        type: "dialog",
      },
      {
        description: "Click the button to add a new item to the list.",
        effect({ next, target, show }) {
          show();
          const [promise, cancel] = waitForEvent(target, "click");
          promise.then(() => next());
          return cancel;
        },
        id: "add-item",
        target: () => document.querySelector<HTMLElement>("#btn-add-item"),
        title: "Add an item",
        type: "tooltip",
      },
      {
        actions: [{ action: "next", label: "Next" }],
        description: "The tour waited for this element to appear before showing this step.",
        effect({ show }) {
          const [promise, cancel] = waitForElement(
            () => document.querySelector<HTMLElement>('[data-item="new"]'),
            { timeout: 5000 },
          );
          promise.then(() => show());
          return () => cancel();
        },
        id: "new-item",
        target: () => document.querySelector<HTMLElement>('[data-item="new"]'),
        title: "Item added",
        type: "tooltip",
      },
      {
        actions: [{ action: "dismiss", label: "Done" }],
        description: "You learned how to use waitForElement for dynamic content.",
        id: "complete",
        title: "Tour complete",
        type: "dialog",
      },
    ];
    const [items, setItems] = useState(["Item 1", "Item 2"]);

    const addItem = () => {
      setItems((prev) => [...prev, `Item ${prev.length + 1}`]);
    };

    return (
      <div className="flex flex-col gap-2">
        <Tour steps={steps}>
          <Tour.Trigger asChild>
            <Button variant="outline">Start tour</Button>
          </Tour.Trigger>
          <div className="flex flex-col gap-2">
            <Button id="btn-add-item" onClick={addItem} size="sm" variant="outline">
              <PlusIcon className="size-4" />
              Add Item
            </Button>
            <div className="flex flex-col gap-2">
              {items.map((item, index) => (
                <div
                  className="rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm"
                  data-item={index === items.length - 1 && items.length > 2 ? "new" : undefined}
                  key={item}
                >
                  {item}
                </div>
              ))}
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
  },
});

export const WaitForInput = meta.story({
  render: () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const steps: TourStepType[] = [
      {
        actions: [{ action: "next", label: "Start" }],
        description: "Learn how to fill out the form by following the guided steps.",
        id: "intro",
        title: "Form tutorial",
        type: "dialog",
      },
      {
        description: "Type your name in the input field to continue.",
        effect({ next, target, show }) {
          show();
          const [promise, cancel] = waitForEvent<HTMLInputElement>(target, "input", {
            predicate: (el) => el.value.trim().length >= 2,
          });
          promise.then(() => next());
          return cancel;
        },
        id: "enter-name",
        target: () => document.querySelector<HTMLInputElement>("#input-name"),
        title: "Enter your name",
        type: "tooltip",
      },
      {
        description: "Now enter a valid email address.",
        effect({ next, target, show }) {
          show();
          const [promise, cancel] = waitForEvent<HTMLInputElement>(target, "input", {
            predicate: (el) => emailRegex.test(el.value),
          });
          promise.then(() => next());
          return cancel;
        },
        id: "enter-email",
        target: () => document.querySelector<HTMLInputElement>("#input-email"),
        title: "Enter your email",
        type: "tooltip",
      },
      {
        description: "Check the checkbox to accept the terms.",
        effect({ next, target, show }) {
          show();
          const [promise, cancel] = waitForEvent<HTMLInputElement>(target, "change", {
            predicate: (el) => el.checked,
          });
          promise.then(() => next());
          return cancel;
        },
        id: "check-terms",
        target: () => document.querySelector<HTMLInputElement>("#checkbox-terms"),
        title: "Accept terms",
        type: "tooltip",
      },
      {
        actions: [{ action: "dismiss", label: "Done" }],
        description: "You have successfully filled out the form.",
        id: "complete",
        title: "Form complete",
        type: "dialog",
      },
    ];
    return (
      <div className="flex flex-col gap-2">
        <Tour steps={steps}>
          <Tour.Trigger asChild>
            <Button variant="outline">Start form tutorial</Button>
          </Tour.Trigger>
          <div className="flex flex-col gap-2 rounded-lg border border-border bg-muted/50 p-4">
            <Field>
              <Field.Label htmlFor="input-name">Name</Field.Label>
              <Input id="input-name" placeholder="Enter your name" type="text" />
            </Field>
            <Field>
              <Field.Label htmlFor="input-email">Email</Field.Label>
              <Input id="input-email" placeholder="Enter your email" type="email" />
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="checkbox-terms" />
              <Field.Label htmlFor="checkbox-terms">I accept the terms and conditions</Field.Label>
            </Field>
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
  },
});
