import { Button } from "@pisagor/react";
import type { TourStepType } from "..";
import { Tour } from "..";
export function Async() {
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
}
