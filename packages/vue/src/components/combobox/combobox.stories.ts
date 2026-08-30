import { useListCollection } from "@ark-ui/vue/collection";
import { useFilter } from "@ark-ui/vue/locale";
import { PhAppleLogo } from "@phosphor-icons/vue";
import { Combobox, InputGroup, Surface } from "@pisagor/vue";
import { computed, ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Combobox,
  parameters: {
    docs: {
      description: {
        component: "Lets users filter options while typing and pick a single result.",
      },
    },
    metadata: {
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    ClearTrigger: Combobox.ClearTrigger,
    Content: Combobox.Content,
    Context: Combobox.Context,
    Control: Combobox.Control,
    Empty: Combobox.Empty,
    FieldInput: Combobox.FieldInput,
    Input: Combobox.Input,
    Item: Combobox.Item,
    ItemGroup: Combobox.ItemGroup,
    ItemGroupLabel: Combobox.ItemGroupLabel,
    List: Combobox.List,
    Positioner: Combobox.Positioner,
    Root: Combobox.Root,
    Trigger: Combobox.Trigger,
  },
  title: "Components/Forms/Combobox",
});

export const Default = meta.story({
  render: () => ({
    components: { Combobox },
    setup() {
      return {
        items: ["Apple", "Banana", "Orange", "Pineapple"],
      };
    },
    template: '<Combobox :items="items" :clearable="true" />',
  }),
});

const sizeItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];

export const Sizes = meta.story({
  render: () => ({
    components: { Combobox },
    setup() {
      const filterUtils = useFilter({ sensitivity: "base" });
      const { collection: collectionSm, filter: filterSm } = useListCollection({
        filter: filterUtils.value.contains,
        initialItems: sizeItems,
      });
      const { collection: collectionMd, filter: filterMd } = useListCollection({
        filter: filterUtils.value.contains,
        initialItems: sizeItems,
      });
      const { collection: collectionLg, filter: filterLg } = useListCollection({
        filter: filterUtils.value.contains,
        initialItems: sizeItems,
      });

      return { collectionLg, collectionMd, collectionSm, filterLg, filterMd, filterSm };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Combobox.Root :collection="collectionSm" @input-value-change="({ inputValue }) => filterSm(inputValue)">
          <Combobox.Input size="sm" />
          <Combobox.Content>
            <Combobox.List>
              <Combobox.Item v-for="item in collectionSm.items" :key="item.value" :item="item">
                {{ item.label }}
              </Combobox.Item>
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Root>
        <Combobox.Root :collection="collectionMd" @input-value-change="({ inputValue }) => filterMd(inputValue)">
          <Combobox.Input size="md" />
          <Combobox.Content>
            <Combobox.List>
              <Combobox.Item v-for="item in collectionMd.items" :key="item.value" :item="item">
                {{ item.label }}
              </Combobox.Item>
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Root>
        <Combobox.Root :collection="collectionLg" @input-value-change="({ inputValue }) => filterLg(inputValue)">
          <Combobox.Input size="lg" />
          <Combobox.Content>
            <Combobox.List>
              <Combobox.Item v-for="item in collectionLg.items" :key="item.value" :item="item">
                {{ item.label }}
              </Combobox.Item>
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Root>
      </div>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Combobox },
    setup() {
      return { items: ["Apple", "Banana", "Cherry"] };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Combobox :items="items" variant="primary" />
        <Combobox :items="items" variant="secondary" />
      </div>
    `,
  }),
});

export const OnSurface = meta.story({
  parameters: { layout: "fullscreen" },
  render: () => ({
    components: { Combobox, Surface },
    setup() {
      return { items: ["Apple", "Banana", "Cherry"] };
    },
    template: `
      <Surface bordered padding="md" variant="default">
        <div class="flex flex-col gap-2">
          <Combobox :items="items" variant="primary" />
          <Combobox :items="items" variant="secondary" />
        </div>
      </Surface>
    `,
  }),
});

export const Autohighlight = meta.story({
  render: () => ({
    components: { Combobox },
    setup() {
      return {
        items: [
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
          { label: "Cherry", value: "cherry" },
          { label: "Date", value: "date" },
          { label: "Elderberry", value: "elderberry" },
        ],
      };
    },
    template: '<Combobox input-behavior="autohighlight" :items="items" />',
  }),
});

export const Multiple = meta.story({
  render: () => ({
    components: { Combobox },
    setup() {
      return {
        items: [
          { label: "React", value: "react" },
          { label: "Vue", value: "vue" },
          { label: "Svelte", value: "svelte" },
          { label: "Solid", value: "solid" },
        ],
      };
    },
    template: '<Combobox :items="items" multiple />',
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { Combobox },
    setup() {
      return {
        items: [
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
          { label: "Cherry", value: "cherry" },
        ],
      };
    },
    template: '<Combobox disabled :items="items" />',
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { Combobox },
    setup() {
      return {
        items: [
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
          { label: "Cherry", value: "cherry" },
        ],
      };
    },
    template: '<Combobox invalid :items="items" />',
  }),
});

export const Group = meta.story({
  render: () => ({
    components: { Combobox },
    setup() {
      const filterUtils = useFilter({ sensitivity: "base" });
      const { collection, filter } = useListCollection({
        filter: filterUtils.value.contains,
        groupBy: (item) => item.continent,
        initialItems: [
          { continent: "North America", label: "Canada", value: "ca" },
          { continent: "North America", label: "United States", value: "us" },
          { continent: "North America", label: "Mexico", value: "mx" },
          { continent: "Europe", label: "United Kingdom", value: "uk" },
          { continent: "Europe", label: "Germany", value: "de" },
          { continent: "Europe", label: "France", value: "fr" },
          { continent: "Asia", label: "Japan", value: "jp" },
          { continent: "Asia", label: "South Korea", value: "kr" },
          { continent: "Asia", label: "China", value: "cn" },
        ],
      });
      const groups = computed(() => collection.value.group());

      return { collection, filter, groups };
    },
    template: `
      <Combobox.Root
        :collection="collection"
        @input-value-change="({ inputValue }) => filter(inputValue)"
      >
        <Combobox.Input placeholder="Select a timezone" />
        <Combobox.Content class="w-60">
          <Combobox.List>
            <Combobox.ItemGroup
              v-for="[continent, group] in groups"
              :key="continent"
              :heading="continent"
            >
              <Combobox.Item v-for="item in group" :key="item.value" :item="item">
                {{ item.label }}
              </Combobox.Item>
            </Combobox.ItemGroup>
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    `,
  }),
});

export const WithClearButton = meta.story({
  render: () => ({
    components: { Combobox },
    setup() {
      return {
        items: [
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
          { label: "Cherry", value: "cherry" },
        ],
      };
    },
    template: '<Combobox clearable :items="items" />',
  }),
});

export const WithScroll = meta.story({
  render: () => ({
    components: { Combobox },
    setup() {
      const filterUtils = useFilter({ sensitivity: "base" });
      const { collection, filter } = useListCollection({
        filter: filterUtils.value.contains,
        initialItems: Array.from({ length: 30 }, (_, i) => ({
          label: `Option ${i + 1}`,
          value: `option-${i + 1}`,
        })),
      });

      return { collection, filter };
    },
    template: `
      <Combobox.Root
        :collection="collection"
        @input-value-change="({ inputValue }) => filter(inputValue)"
      >
        <Combobox.Input placeholder="Search..." />
        <Combobox.Content class="max-h-60">
          <Combobox.List>
            <Combobox.Item v-for="item in collection.items" :key="item.value" :item="item">
              {{ item.label }}
            </Combobox.Item>
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    `,
  }),
});

export const WithStartIcon = meta.story({
  render: () => ({
    components: { Combobox, InputGroup, PhAppleLogo },
    setup() {
      const filterUtils = useFilter({ sensitivity: "base" });
      const { collection, filter } = useListCollection({
        filter: filterUtils.value.contains,
        initialItems: [
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
          { label: "Cherry", value: "cherry" },
        ],
      });

      return { collection, filter };
    },
    template: `
      <Combobox.Root
        :collection="collection"
        @input-value-change="({ inputValue }) => filter(inputValue)"
      >
        <Combobox.Input placeholder="Search fruits...">
          <InputGroup.Addon align="inline-start">
            <PhAppleLogo />
          </InputGroup.Addon>
        </Combobox.Input>
        <Combobox.Content>
          <Combobox.List>
            <Combobox.Item v-for="item in collection.items" :key="item.value" :item="item">
              {{ item.label }}
            </Combobox.Item>
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    `,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Combobox },
    setup() {
      const value = ref<string[]>(["banana"]);
      const onValueChange = (next: string[]) => {
        value.value = next;
      };

      return {
        items: [
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
          { label: "Cherry", value: "cherry" },
          { label: "Date", value: "date" },
        ],
        onValueChange,
        value,
      };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Combobox :items="items" :onValueChange="onValueChange" :value="value" />
        <p class="text-center text-muted-foreground text-sm">Selected: {{ value[0] ?? "(none)" }}</p>
      </div>
    `,
  }),
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Manual composition with `Combobox.Root` when shorthand props are not enough — for example, custom filtering.",
      },
    },
  },
  render: () => ({
    components: { Combobox },
    setup() {
      const filterUtils = useFilter({ sensitivity: "base" });
      const { collection, filter } = useListCollection({
        filter: filterUtils.value.contains,
        initialItems: [
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
          { label: "Cherry", value: "cherry" },
          { label: "Date", value: "date" },
        ],
      });

      return { collection, filter };
    },
    template: `
      <Combobox.Root
        :collection="collection"
        @input-value-change="({ inputValue }) => filter(inputValue)"
      >
        <Combobox.Input placeholder="Select an option" />
        <Combobox.Content>
          <Combobox.List>
            <Combobox.Item v-for="item in collection.items" :key="item.value" :item="item">
              {{ item.label }}
            </Combobox.Item>
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    `,
  }),
});
