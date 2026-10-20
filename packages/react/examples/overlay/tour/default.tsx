import type { TourStepType } from "@pisagor/react";
import { Button, Tour } from "@pisagor/react";

export function Default() {
  const steps: TourStepType[] = [
    {
      actions: [{ action: "next" as const, label: "Start tour" }],
      description:
        "You gonna learn how to use to install and use the component.",
      id: "step-1",
      title: "Welcome to the tour",
      type: "dialog",
    },
    {
      actions: [
        { action: "prev" as const, label: "Previous" },
        { action: "next" as const, label: "Next" },
      ],
      description:
        "Let's take a quick tour of the documentation site to help you get started。",
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
    <Tour steps={steps} trigger={<Button variant="outline">Open</Button>} />
  );
}
