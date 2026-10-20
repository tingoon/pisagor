<script lang="ts">
  import { waitForElement, waitForEvent } from "@ark-ui/svelte";
  import { Button, Tour, type TourStepDetails } from "@pisagor/svelte";
  import { PlusIcon } from "phosphor-svelte";

  const steps: TourStepDetails[] = [
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

  let items = $state(["Item 1", "Item 2"]);

  const addItem = () => {
    items = [...items, `Item ${items.length + 1}`];
  };
</script>

<div class="flex flex-col gap-2">
  <Tour {steps}>
    {#snippet trigger(props)}
      <Button {...props()} variant="outline">Start tour</Button>
    {/snippet}

    <div class="flex flex-col gap-2">
      <Button id="btn-add-item" onclick={addItem} size="sm" variant="outline">
        <PlusIcon class="size-4" />
        Add Item
      </Button>
      <div class="flex flex-col gap-2">
        {#each items as item, index}
          <div
            class="border-border bg-muted/50 rounded-lg border px-4 py-3 text-sm"
            data-item={index === items.length - 1 && items.length > 2
              ? "new"
              : undefined}
          >
            {item}
          </div>
        {/each}
      </div>
    </div>
  </Tour>
</div>
