/** @jsxImportSource solid-js */

import type { TourStepType } from "@pisagor/solid";
import { Button, Tour } from "@pisagor/solid";
export function CustomSpacing() {
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
      <Tour.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Tour.Content class="[--space:--spacing(2)]">
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
}
