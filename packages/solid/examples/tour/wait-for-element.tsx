/** @jsxImportSource solid-js */

import { waitForElement, waitForEvent } from "@ark-ui/solid/tour";
import { Button } from "@pisagor/solid";
import { PlusIcon } from "@pisagor/solid/icons";
import type { TourStepType } from "@pisagor/solid/tour";
import { Tour } from "@pisagor/solid/tour";
import { createSignal } from "solid-js";
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
  const [items, setItems] = createSignal(["Item 1", "Item 2"]);

  const addItem = () => {
    setItems((prev) => [...prev, `Item ${prev.length + 1}`]);
  };

  return (
    <div class="flex flex-col gap-2">
      <Tour steps={steps}>
        <Tour.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Start tour
            </Button>
          )}
        />
        <div class="flex flex-col gap-2">
          <Button
            id="btn-add-item"
            onClick={addItem}
            size="sm"
            variant="outline"
          >
            <PlusIcon class="size-4" />
            Add Item
          </Button>
          <div class="flex flex-col gap-2">
            {items().map((item, index) => (
              <div
                class="rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm"
                data-item={
                  index === items().length - 1 && items().length > 2
                    ? "new"
                    : undefined
                }
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
