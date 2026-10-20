import type { TourStepType } from "@pisagor/react";
import { Button, Tour } from "@pisagor/react";

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
    <Tour
      steps={steps}
      classNames={{ content: "[--space:--spacing(2)]" }}
      trigger={<Button variant="outline">Open</Button>}
    />
  );
}
