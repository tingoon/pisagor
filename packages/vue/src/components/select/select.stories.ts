import { createListCollection } from "@ark-ui/vue/collection";
import { Select } from "@pisagor/vue/select";
import { Surface } from "@pisagor/vue/surface";
import { ref } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: Select.Root,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users choose one option from a dropdown list when screen space for all choices is limited.",
      },
    },
  },
  subcomponents: {
    ClearTrigger: Select.ClearTrigger,
    Content: Select.Content,
    Context: Select.Context as unknown as typeof Select.Root,
    Empty: Select.Empty,
    Group: Select.Group,
    GroupLabel: Select.GroupLabel,
    Item: Select.Item,
    Root: Select.Root,
    Separator: Select.Separator,
    Trigger: Select.Trigger,
    Value: Select.Value,
  },
  title: "Components/Forms/Select",
});

export const Default = meta.story({
  render: () => ({
    components: { Select },
    setup() {
      return {
        items: ["Banana", "Apple", "Orange", "Pineapple"],
        placeholder: "Select a fruit",
      };
    },
    template: '<Select :items="items" :placeholder="placeholder" />',
  }),
});

export const Sizes = meta.story({
  render: () => ({
    components: { Select },
    setup() {
      const collection = createListCollection({
        items: [
          { label: "Next.js", value: "next" },
          { label: "Vite", value: "vite" },
          { label: "ESBuild", value: "esbuild" },
        ],
      });
      const sizes = ["sm", "md", "lg"] as const;
      return { collection, sizes };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Select.Root v-for="size in sizes" :key="size" :collection="collection">
          <Select.Trigger :size="size">
            <Select.Value placeholder="Select framework" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item v-for="item in collection.items" :key="item.value" :item="item">
              {{ item.label }}
            </Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Select },
    setup() {
      const collection = createListCollection({ items: ["Apple", "Banana", "Orange"] });
      return { collection };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Select.Root :collection="collection" variant="primary">
          <Select.Trigger>
            <Select.Value placeholder="Primary" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item v-for="item in collection.items" :key="item" :item="item">
              {{ item }}
            </Select.Item>
          </Select.Content>
        </Select.Root>
        <Select.Root :collection="collection" variant="secondary">
          <Select.Trigger>
            <Select.Value placeholder="Secondary" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item v-for="item in collection.items" :key="item" :item="item">
              {{ item }}
            </Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    `,
  }),
});

export const OnSurface = meta.story({
  render: () => ({
    components: { Select, Surface },
    setup() {
      const collection = createListCollection({ items: ["Apple", "Banana", "Orange"] });
      return { collection };
    },
    template: `
      <Surface bordered padding="md" variant="default">
        <div class="flex flex-col gap-2">
          <Select.Root :collection="collection" variant="primary">
            <Select.Trigger>
              <Select.Value placeholder="Primary" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item v-for="item in collection.items" :key="item" :item="item">
                {{ item }}
              </Select.Item>
            </Select.Content>
          </Select.Root>
          <Select.Root :collection="collection" variant="secondary">
            <Select.Trigger>
              <Select.Value placeholder="Secondary" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item v-for="item in collection.items" :key="item" :item="item">
                {{ item }}
              </Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </Surface>
    `,
  }),
});

export const Empty = meta.story({
  render: () => ({
    components: { Select },
    setup() {
      const collection = createListCollection({
        items: [] as Array<{ label: string; value: string }>,
      });
      return { collection };
    },
    template: `
      <Select.Root :collection="collection">
        <Select.Trigger>
          <Select.Value placeholder="Select an option" />
        </Select.Trigger>
        <Select.Content>
          <Select.Empty>No items to display. Add an item to get started.</Select.Empty>
        </Select.Content>
      </Select.Root>
    `,
  }),
});

export const Grouping = meta.story({
  render: () => ({
    components: { Select },
    setup() {
      const collection = createListCollection({
        groupBy: (item) => (item as { category: string }).category,
        items: [
          { category: "Frontend", label: "Next.js", value: "next" },
          { category: "Frontend", label: "Vite", value: "vite" },
          { category: "Frontend", label: "Astro", value: "astro" },
          { category: "Backend", label: "Express", value: "express" },
          { category: "Backend", label: "Fastify", value: "fastify" },
          { category: "Backend", label: "NestJS", value: "nestjs" },
        ],
      });
      const groups = collection.group().map(([category, items]) => ({ category, items }));
      return { collection, groups };
    },
    template: `
      <Select.Root :collection="collection">
        <Select.Trigger>
          <Select.Value placeholder="Select framework" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group v-for="group in groups" :key="group.category" :heading="group.category">
            <Select.Item v-for="item in group.items" :key="item.value" :item="item">
              {{ item.label }}
            </Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    `,
  }),
});

export const MaxSelection = meta.story({
  render: () => ({
    components: { Select },
    setup() {
      const MAX_SELECTION = 3;
      const renderValue = (value: string[]) => {
        if (value.length === 0) {
          return "Select 3 frameworks";
        }

        const firstValue = value?.at(0) ?? "";
        const additionalValues = value.length > 1 ? ` (+${value.length - 1} more)` : "";

        return firstValue + additionalValues;
      };

      const collection = createListCollection({
        items: [
          { label: "JavaScript", value: "javascript" },
          { label: "TypeScript", value: "typescript" },
          { label: "Python", value: "python" },
          { label: "Rust", value: "rust" },
        ],
      });
      const value = ref<string[]>([]);

      const onValueChange = (newValue: string | string[]) => {
        const values = Array.isArray(newValue) ? newValue : [newValue];
        value.value = values.slice(0, MAX_SELECTION);
      };

      return { collection, onValueChange, renderValue, value };
    },
    template: `
      <Select.Root :collection="collection" multiple :onValueChange="onValueChange" :value="value">
        <Select.Trigger>
          <Select.Value class="capitalize">
            <Select.Context v-slot="{ value }">{{ renderValue(value) }}</Select.Context>
          </Select.Value>
        </Select.Trigger>
        <Select.Content>
          <Select.Item v-for="item in collection.items" :key="item.value" :item="item">
            {{ item.label }}
          </Select.Item>
        </Select.Content>
      </Select.Root>
    `,
  }),
});

export const Multiple = meta.story({
  render: () => ({
    components: { Select },
    setup() {
      const renderValue = (value: string[]) => {
        if (value.length === 0) {
          return "Select languages…";
        }

        const firstValue = value?.at(0) ?? "";
        const additionalValues = value.length > 1 ? ` (+${value.length - 1} more)` : "";

        return firstValue + additionalValues;
      };

      const collection = createListCollection({
        items: [
          { label: "JavaScript", value: "javascript" },
          { label: "TypeScript", value: "typescript" },
          { label: "Python", value: "python" },
          { label: "Rust", value: "rust" },
        ],
      });

      return { collection, renderValue };
    },
    template: `
      <Select.Root :collection="collection" :defaultValue="['javascript', 'typescript']" multiple>
        <Select.Trigger>
          <Select.Value class="capitalize">
            <Select.Context v-slot="{ value }">{{ renderValue(value) }}</Select.Context>
          </Select.Value>
        </Select.Trigger>
        <Select.Content>
          <Select.Item v-for="item in collection.items" :key="item.value" :item="item">
            {{ item.label }}
          </Select.Item>
        </Select.Content>
      </Select.Root>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { Select },
    setup() {
      const collection = createListCollection({
        items: [
          { label: "Next.js", value: "next" },
          { label: "Vite", value: "vite" },
          { label: "Astro", value: "astro" },
        ],
      });
      return { collection };
    },
    template: `
      <Select.Root :collection="collection" disabled>
        <Select.Trigger>
          <Select.Value placeholder="Select framework" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item v-for="item in collection.items" :key="item.value" :item="item">
            {{ item.label }}
          </Select.Item>
        </Select.Content>
      </Select.Root>
    `,
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { Select },
    setup() {
      const collection = createListCollection({
        items: [
          { label: "Next.js", value: "next" },
          { label: "Vite", value: "vite" },
          { label: "Astro", value: "astro" },
        ],
      });
      return { collection };
    },
    template: `
      <Select.Root :collection="collection" invalid>
        <Select.Trigger>
          <Select.Value placeholder="Select framework" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item v-for="item in collection.items" :key="item.value" :item="item">
            {{ item.label }}
          </Select.Item>
        </Select.Content>
      </Select.Root>
    `,
  }),
});

export const WithScroll = meta.story({
  render: () => ({
    components: { Select },
    setup() {
      const collection = createListCollection({
        items: Array.from({ length: 20 }, (_, i) => ({
          label: `Framework ${i + 1}`,
          value: `framework-${i + 1}`,
        })),
      });
      const positioning = { fitViewport: true };
      return { collection, positioning };
    },
    template: `
      <Select.Root :collection="collection" :positioning="positioning">
        <Select.Trigger>
          <Select.Value placeholder="Select framework" />
        </Select.Trigger>
        <Select.Content class="max-h-56">
          <Select.Item v-for="item in collection.items" :key="item.value" :item="item">
            {{ item.label }}
          </Select.Item>
        </Select.Content>
      </Select.Root>
    `,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Select },
    setup() {
      const collection = createListCollection({
        items: [
          { label: "React", value: "react" },
          { label: "Vue", value: "vue" },
          { label: "Svelte", value: "svelte" },
        ],
      });
      const value = ref<string[]>(["react"]);
      const onValueChange = (newValue: string | string[]) => {
        value.value = Array.isArray(newValue) ? newValue : [newValue];
      };

      return { collection, onValueChange, value };
    },
    template: `
      <Select.Root :collection="collection" :onValueChange="onValueChange" :value="value">
        <Select.Trigger>
          <Select.Value placeholder="Select a framework" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item v-for="item in collection.items" :key="item.value" :item="item">
            {{ item.label }}
          </Select.Item>
        </Select.Content>
      </Select.Root>
    `,
  }),
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `Select.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => ({
    components: { Select },
    setup() {
      const collection = createListCollection({
        items: ["Banana", "Apple", "Orange", "Pineapple"],
      });
      return { collection };
    },
    template: `
      <Select.Root :collection="collection">
        <Select.Trigger>
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group heading="Fruits">
            <Select.Item v-for="item in collection.items" :key="item" :item="item">
              {{ item }}
            </Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    `,
  }),
});
