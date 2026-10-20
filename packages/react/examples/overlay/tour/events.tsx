import type { TourStepType } from "@pisagor/react";
import { Button, Tour } from "@pisagor/react";
import { useRef, useState } from "react";

export function Events() {
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
        onStepChange={(details) =>
          addLog(`Step changed: ${details.stepId ?? "unknown"}`)
        }
        steps={steps}
        trigger={<Button variant="outline">Start tour</Button>}
      >
        <div className="flex flex-wrap gap-2">
          <div
            className="bg-popover flex items-center justify-center rounded-md border px-6 py-4 font-medium"
            id="event-1"
          >
            Step 1
          </div>
          <div
            className="bg-popover flex items-center justify-center rounded-md border px-6 py-4 font-medium"
            id="event-2"
          >
            Step 2
          </div>
          <div
            className="bg-popover flex items-center justify-center rounded-md border px-6 py-4 font-medium"
            id="event-3"
          >
            Step 3
          </div>
        </div>
        <div className="bg-muted text-muted-foreground flex h-32 flex-col gap-1 overflow-y-auto rounded-md border p-3 font-mono text-xs">
          <strong>Event Log:</strong>
          {logs.length === 0 ? (
            <span>Start the tour to see events</span>
          ) : (
            logs.map((log) => <span key={log.id}>{log.message}</span>)
          )}
        </div>
      </Tour>
    </div>
  );
}
