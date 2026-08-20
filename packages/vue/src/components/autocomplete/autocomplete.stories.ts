import { useListCollection } from "@ark-ui/vue/collection";
import { useFilter } from "@ark-ui/vue/locale";
import { PhAppleLogo } from "@phosphor-icons/vue";
import { Autocomplete, InputGroup, Surface } from "@pisagor/vue";
import { computed, ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Autocomplete,
  parameters: {
    docs: {
      description: {
        component: "Lets users filter options while typing.",
      },
    },
    metadata: {
      aliases: ["typeahead"],
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Clear: Autocomplete.Clear,
    Collection: Autocomplete.Collection,
    Content: Autocomplete.Content,
    Control: Autocomplete.Control,
    Empty: Autocomplete.Empty,
    Group: Autocomplete.Group,
    GroupLabel: Autocomplete.GroupLabel,
    Input: Autocomplete.Input,
    Item: Autocomplete.Item,
    List: Autocomplete.List,
    Root: Autocomplete.Root,
    Separator: Autocomplete.Separator,
    Trigger: Autocomplete.Trigger,
  },
  title: "Components/Forms/Autocomplete",
});

export const Default = meta.story({
  render: () => ({
    components: { Autocomplete },
    setup() {
      return {
        items: ["Apple", "Banana", "Orange", "Pineapple"],
      };
    },
    template: '<Autocomplete :items="items" :clearable="true" />',
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
    components: { Autocomplete },
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
        <Autocomplete.Root :collection="collectionSm" @input-value-change="({ inputValue }) => filterSm(inputValue)">
          <Autocomplete.Input clearable show-trigger size="sm" />
          <Autocomplete.Content>
            <Autocomplete.Empty>No items found.</Autocomplete.Empty>
            <Autocomplete.List>
              <Autocomplete.Item v-for="item in collectionSm.items" :key="item.value" :item="item">
                {{ item.label }}
              </Autocomplete.Item>
            </Autocomplete.List>
          </Autocomplete.Content>
        </Autocomplete.Root>
        <Autocomplete.Root :collection="collectionMd" @input-value-change="({ inputValue }) => filterMd(inputValue)">
          <Autocomplete.Input clearable show-trigger size="md" />
          <Autocomplete.Content>
            <Autocomplete.Empty>No items found.</Autocomplete.Empty>
            <Autocomplete.List>
              <Autocomplete.Item v-for="item in collectionMd.items" :key="item.value" :item="item">
                {{ item.label }}
              </Autocomplete.Item>
            </Autocomplete.List>
          </Autocomplete.Content>
        </Autocomplete.Root>
        <Autocomplete.Root :collection="collectionLg" @input-value-change="({ inputValue }) => filterLg(inputValue)">
          <Autocomplete.Input clearable show-trigger size="lg" />
          <Autocomplete.Content>
            <Autocomplete.Empty>No items found.</Autocomplete.Empty>
            <Autocomplete.List>
              <Autocomplete.Item v-for="item in collectionLg.items" :key="item.value" :item="item">
                {{ item.label }}
              </Autocomplete.Item>
            </Autocomplete.List>
          </Autocomplete.Content>
        </Autocomplete.Root>
      </div>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Autocomplete },
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
      <div class="flex flex-col gap-2">
        <Autocomplete.Root
          :collection="collection"
          variant="primary"
          @input-value-change="({ inputValue }) => filter(inputValue)"
        >
          <Autocomplete.Input placeholder="Primary" />
          <Autocomplete.Content>
            <Autocomplete.List>
              <Autocomplete.Item v-for="item in collection.items" :key="item.value" :item="item">
                {{ item.label }}
              </Autocomplete.Item>
            </Autocomplete.List>
          </Autocomplete.Content>
        </Autocomplete.Root>
        <Autocomplete.Root
          :collection="collection"
          variant="secondary"
          @input-value-change="({ inputValue }) => filter(inputValue)"
        >
          <Autocomplete.Input placeholder="Secondary" />
          <Autocomplete.Content>
            <Autocomplete.List>
              <Autocomplete.Item v-for="item in collection.items" :key="item.value" :item="item">
                {{ item.label }}
              </Autocomplete.Item>
            </Autocomplete.List>
          </Autocomplete.Content>
        </Autocomplete.Root>
      </div>
    `,
  }),
});

export const OnSurface = meta.story({
  render: () => ({
    components: { Autocomplete, Surface },
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
      <Surface bordered padding="md" variant="default">
        <div class="flex flex-col gap-2">
          <Autocomplete.Root
            :collection="collection"
            variant="primary"
            @input-value-change="({ inputValue }) => filter(inputValue)"
          >
            <Autocomplete.Input placeholder="Primary" />
            <Autocomplete.Content>
              <Autocomplete.List>
                <Autocomplete.Item v-for="item in collection.items" :key="item.value" :item="item">
                  {{ item.label }}
                </Autocomplete.Item>
              </Autocomplete.List>
            </Autocomplete.Content>
          </Autocomplete.Root>
          <Autocomplete.Root
            :collection="collection"
            variant="secondary"
            @input-value-change="({ inputValue }) => filter(inputValue)"
          >
            <Autocomplete.Input placeholder="Secondary" />
            <Autocomplete.Content>
              <Autocomplete.List>
                <Autocomplete.Item v-for="item in collection.items" :key="item.value" :item="item">
                  {{ item.label }}
                </Autocomplete.Item>
              </Autocomplete.List>
            </Autocomplete.Content>
          </Autocomplete.Root>
        </div>
      </Surface>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { Autocomplete },
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
      <Autocomplete.Root
        :collection="collection"
        disabled
        @input-value-change="({ inputValue }) => filter(inputValue)"
      >
        <Autocomplete.Input placeholder="Select a fruit..." />
        <Autocomplete.Content>
          <Autocomplete.Empty>No items found.</Autocomplete.Empty>
          <Autocomplete.List>
            <Autocomplete.Item v-for="item in collection.items" :key="item.value" :item="item">
              {{ item.label }}
            </Autocomplete.Item>
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
    `,
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { Autocomplete },
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
      <Autocomplete.Root
        :collection="collection"
        invalid
        @input-value-change="({ inputValue }) => filter(inputValue)"
      >
        <Autocomplete.Input placeholder="Select a fruit..." />
        <Autocomplete.Content>
          <Autocomplete.Empty />
          <Autocomplete.List>
            <Autocomplete.Item v-for="item in collection.items" :key="item.value" :item="item">
              {{ item.label }}
            </Autocomplete.Item>
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
    `,
  }),
});

export const Group = meta.story({
  render: () => ({
    components: { Autocomplete },
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
      <Autocomplete.Root
        :collection="collection"
        @input-value-change="({ inputValue }) => filter(inputValue)"
      >
        <Autocomplete.Input placeholder="Select a timezone" />
        <Autocomplete.Content class="w-60">
          <Autocomplete.Empty />
          <Autocomplete.List>
            <Autocomplete.Group
              v-for="[continent, group] in groups"
              :key="continent"
              :heading="continent"
            >
              <Autocomplete.Item v-for="item in group" :key="item.value" :item="item">
                {{ item.label }}
              </Autocomplete.Item>
            </Autocomplete.Group>
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
    `,
  }),
});

export const WithClearButton = meta.story({
  render: () => ({
    components: { Autocomplete },
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
      <Autocomplete.Root
        :collection="collection"
        :default-value="['apple']"
        @input-value-change="({ inputValue }) => filter(inputValue)"
      >
        <Autocomplete.Input clearable placeholder="Select a fruit..." />
        <Autocomplete.Content>
          <Autocomplete.Empty>No items found.</Autocomplete.Empty>
          <Autocomplete.List>
            <Autocomplete.Item v-for="item in collection.items" :key="item.value" :item="item">
              {{ item.label }}
            </Autocomplete.Item>
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
    `,
  }),
});

export const WithStartIcon = meta.story({
  render: () => ({
    components: { Autocomplete, InputGroup, PhAppleLogo },
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
      <Autocomplete.Root
        :collection="collection"
        @input-value-change="({ inputValue }) => filter(inputValue)"
      >
        <Autocomplete.Input placeholder="Search fruits...">
          <InputGroup.Addon align="inline-start">
            <PhAppleLogo />
          </InputGroup.Addon>
        </Autocomplete.Input>
        <Autocomplete.Content>
          <Autocomplete.Empty />
          <Autocomplete.List>
            <Autocomplete.Item v-for="item in collection.items" :key="item.value" :item="item">
              {{ item.label }}
            </Autocomplete.Item>
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
    `,
  }),
});

export const WithTrigger = meta.story({
  render: () => ({
    components: { Autocomplete },
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
      <Autocomplete.Root
        :collection="collection"
        @input-value-change="({ inputValue }) => filter(inputValue)"
      >
        <Autocomplete.Input placeholder="Select a fruit..." show-trigger />
        <Autocomplete.Content>
          <Autocomplete.Empty />
          <Autocomplete.List>
            <Autocomplete.Item v-for="item in collection.items" :key="item.value" :item="item">
              {{ item.label }}
            </Autocomplete.Item>
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
    `,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Autocomplete },
    setup() {
      const value = ref<string | undefined>("banana");
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
      const handleValueChange = (next: string[]) => {
        value.value = next.at(0);
      };

      return { collection, filter, handleValueChange, value };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Autocomplete.Root
          class="w-full"
          :collection="collection"
          :value="value ? [value] : []"
          @input-value-change="({ inputValue }) => filter(inputValue)"
          :onValueChange="handleValueChange"
        >
          <Autocomplete.Input placeholder="Select a fruit..." />
          <Autocomplete.Content>
            <Autocomplete.Empty />
            <Autocomplete.List>
              <Autocomplete.Item v-for="item in collection.items" :key="item.value" :item="item">
                {{ item.label }}
              </Autocomplete.Item>
            </Autocomplete.List>
          </Autocomplete.Content>
        </Autocomplete.Root>
        <p class="text-center text-muted-foreground text-sm">Selected: {{ value ?? "(none)" }}</p>
      </div>
    `,
  }),
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Manual composition with `Autocomplete.Root` when shorthand props are not enough — for example, custom filtering.",
      },
    },
  },
  render: () => ({
    components: { Autocomplete },
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
      <Autocomplete.Root
        :collection="collection"
        @input-value-change="({ inputValue }) => filter(inputValue)"
      >
        <Autocomplete.Input clearable placeholder="for example, Apple" />
        <Autocomplete.Content>
          <Autocomplete.Empty />
          <Autocomplete.List>
            <Autocomplete.Item v-for="item in collection.items" :key="item.value" :item="item">
              {{ item.label }}
            </Autocomplete.Item>
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
    `,
  }),
});
