import { waitForElement, waitForEvent } from "@ark-ui/react/tour";
import { PlusIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { useState } from "react";
import type { TourStepType } from "..";
import { Tour } from "..";
export function WaitForElement() {
  const steps: TourStepType[] = [
    {
      actions: [{ action: "next", label: "Start" }],
      description:
        "This tour demonstrates waiting for elements that appear dynamically.",
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
      description:
        "The tour waited for this element to appear before showing this step.",
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
          <Button
            id="btn-add-item"
            onClick={addItem}
            size="sm"
            variant="outline"
          >
            <PlusIcon className="size-4" />
            Add Item
          </Button>
          <div className="flex flex-col gap-2">
            {items.map((item, index) => (
              <div
                className="rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm"
                data-item={
                  index === items.length - 1 && items.length > 2
                    ? "new"
                    : undefined
                }
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
}
