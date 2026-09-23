<script lang="ts" setup >
import { PhPlus } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { ref } from "vue";
import { Tour } from "..";

const items = ref(["Item 1", "Item 2"]);
const addItem = () => {
  setItems((prev) => [...prev, `Item ${prev.length + 1}`]);
};
const steps = [
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
</script>

<template>
        <div class="flex flex-col gap-2">
          <Tour :steps="steps">
            <Tour.Trigger as-child>
              <Button variant="outline">Start tour</Button>
            </Tour.Trigger>
            <div class="flex flex-col gap-2">
              <Button id="btn-add-item" size="sm" variant="outline" @click="addItem" >
                <PhPlus class="size-4" />
                Add Item
              </Button>
              <div class="flex flex-col gap-2">
                <div
                  class="rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm"
                  v-for="(item, index) in items"
                  :key="item"
                  :data-item="isNewItem(index) ? 'new' : undefined"
                >
                  {{ item }}
                </div>
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
  
</template>
