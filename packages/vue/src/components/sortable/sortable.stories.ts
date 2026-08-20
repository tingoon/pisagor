import { Sortable } from "@pisagor/vue";
import { ref } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: Sortable,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users reorder a list by dragging items or moving them with Alt and arrow keys.",
      },
    },
  },
  subcomponents: {
    Handle: Sortable.Handle,
    Item: Sortable.Item,
    ItemContent: Sortable.ItemContent,
    Root: Sortable.Root,
  },
  title: "Components/Actions/Sortable",
});

const labels: Record<string, string> = {
  a: "Design system tokens",
  b: "Component APIs",
  c: "Storybook coverage",
  d: "Accessibility checks",
};

export const Default = meta.story({
  render: () => ({
    components: { Sortable },
    setup() {
      const items = ref(["a", "b", "c", "d"]);
      const onValueChange = (next: string[]) => {
        items.value = next;
      };

      return { items, labels, onValueChange };
    },
    template: `
      <div class="flex w-full flex-col gap-3">
        <p class="text-muted-foreground text-sm">
          Drag from the handle, or focus an item and press Alt+Arrow to move it.
        </p>
        <Sortable :items="items" :onValueChange="onValueChange">
          <Sortable.Item v-for="id in items" :key="id" :value="id">
            <Sortable.ItemContent>
              <Sortable.Handle />
              <span class="font-medium text-sm">{{ labels[id] }}</span>
            </Sortable.ItemContent>
          </Sortable.Item>
        </Sortable>
      </div>
    `,
  }),
});

export const Horizontal = meta.story({
  render: () => ({
    components: { Sortable },
    setup() {
      const items = ref(["a", "b", "c", "d"]);
      const onValueChange = (next: string[]) => {
        items.value = next;
      };

      return { items, labels, onValueChange };
    },
    template: `
      <Sortable :items="items" :onValueChange="onValueChange" orientation="horizontal">
        <Sortable.Item v-for="id in items" :key="id" class="min-w-36" :value="id">
          <Sortable.ItemContent>
            <Sortable.Handle />
            <span class="font-medium text-sm">{{ labels[id] }}</span>
          </Sortable.ItemContent>
        </Sortable.Item>
      </Sortable>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { Sortable },
    setup() {
      const items = ref(["a", "b", "c"]);
      const onValueChange = (next: string[]) => {
        items.value = next;
      };

      return { items, labels, onValueChange };
    },
    template: `
      <Sortable disabled :items="items" :onValueChange="onValueChange">
        <Sortable.Item v-for="id in items" :key="id" :value="id">
          <Sortable.ItemContent>
            <Sortable.Handle />
            <span class="font-medium text-sm">{{ labels[id] }}</span>
          </Sortable.ItemContent>
        </Sortable.Item>
      </Sortable>
    `,
  }),
});

export const WithoutHandle = meta.story({
  render: () => ({
    components: { Sortable },
    setup() {
      const items = ref(["a", "b", "c"]);
      const onValueChange = (next: string[]) => {
        items.value = next;
      };

      return { items, labels, onValueChange };
    },
    template: `
      <Sortable :items="items" :onValueChange="onValueChange">
        <Sortable.Item v-for="id in items" :key="id" :value="id">
          <Sortable.ItemContent>
            <span class="font-medium text-sm">{{ labels[id] }}</span>
          </Sortable.ItemContent>
        </Sortable.Item>
      </Sortable>
    `,
  }),
});
