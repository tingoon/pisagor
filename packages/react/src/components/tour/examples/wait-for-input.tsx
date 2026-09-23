import { waitForEvent } from "@ark-ui/react/tour";
import { Button, Checkbox, Field, Input } from "@pisagor/react";
import type { TourStepType } from "..";
import { Tour } from "..";
export function WaitForInput() {
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
}
