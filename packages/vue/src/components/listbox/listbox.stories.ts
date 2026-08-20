import {
  createGridCollection,
  createListCollection,
  useListCollection,
} from "@ark-ui/vue/collection";
import { useFilter } from "@ark-ui/vue/locale";
import {
  PhCaretLeft,
  PhCaretRight,
  PhCaretUpDown,
  PhPencilSimple,
  PhPlusSquare,
  PhTrash,
} from "@phosphor-icons/vue";
import { Button, Field, Input, Item, Kbd, Listbox, Popover, Separator } from "@pisagor/vue";
import { computed, h, ref } from "vue";
import preview from "#/storybook/preview";

type ArkPart = Parameters<typeof h>[0];

const meta = preview.meta({
  component: Listbox,
  parameters: {
    docs: {
      description: {
        component: "Lets users choose an option from a static list.",
      },
    },
  },
  subcomponents: {
    Content: Listbox.Content,
    Empty: Listbox.Empty,
    Item: Listbox.Item,
    ItemGroup: Listbox.ItemGroup,
    ItemGroupLabel: Listbox.ItemGroupLabel,
    ItemIndicator: Listbox.ItemIndicator,
    ItemText: Listbox.ItemText,
    Root: Listbox.Root,
    Shortcut: Listbox.Shortcut,
    ValueText: Listbox.ValueText,
  },
  title: "Components/Forms/Listbox",
});

export const Default = meta.story({
  render: () => ({
    components: { Listbox },
    setup() {
      return {
        items: [
          { label: "Banana", value: "banana" },
          { label: "Apple", value: "apple" },
          { label: "Orange", value: "orange" },
        ],
      };
    },
    template: '<Listbox :items="items" />',
  }),
});

export const DisabledItem = meta.story({
  render: () => ({
    components: { Item, Listbox },
    setup() {
      const collection = createListCollection({
        items: [
          { label: "Free", value: "free" },
          { label: "Pro", value: "pro" },
          { disabled: true, label: "Enterprise", value: "enterprise" },
          { label: "Custom", value: "custom" },
        ],
      });
      return { collection };
    },
    template: `
      <Item class="p-1" variant="outline">
        <Listbox.Root :collection="collection">
          <Listbox.Content>
            <Listbox.Item v-for="item in collection.items" :key="item.value" :item="item">
              <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
              <Listbox.ItemIndicator />
            </Listbox.Item>
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    `,
  }),
});

export const Grid = meta.story({
  render: () => ({
    components: { Item, Listbox },
    setup() {
      const collection = createGridCollection({
        columnCount: 5,
        items: [
          { label: "😀", value: "grinning" },
          { label: "😍", value: "heart-eyes" },
          { label: "🥳", value: "partying" },
          { label: "😎", value: "sunglasses" },
          { label: "🤩", value: "star-struck" },
          { label: "😂", value: "joy" },
          { label: "🥰", value: "smiling-hearts" },
          { label: "😊", value: "blush" },
          { label: "🤗", value: "hugging" },
          { label: "😇", value: "innocent" },
          { label: "🔥", value: "fire" },
          { label: "✨", value: "sparkles" },
          { label: "💯", value: "hundred" },
          { label: "🎉", value: "tada" },
          { label: "❤️", value: "heart" },
          { label: "👍", value: "thumbs-up" },
          { label: "👏", value: "clap" },
          { label: "🚀", value: "rocket" },
          { label: "⭐", value: "star" },
          { label: "🌈", value: "rainbow" },
        ],
      });
      return { collection };
    },
    template: `
      <Item class="p-1" variant="outline">
        <Listbox.Root :collection="collection">
          <Listbox.Content
            class="grid grid-cols-[repeat(var(--column-count),1fr)] gap-1"
            :style="{ '--column-count': collection.columnCount }"
          >
            <Listbox.Item v-for="item in collection.items" :key="item.value" :item="item">
              <Listbox.ItemText class="text-center text-xl">{{ item.label }}</Listbox.ItemText>
            </Listbox.Item>
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    `,
  }),
});

export const Grouping = meta.story({
  render: () => ({
    components: { Item, Listbox },
    setup() {
      const collection = createListCollection({
        groupBy: (item) => item.region,
        items: [
          { label: "Brazil", region: "South America", value: "br" },
          { label: "Colombia", region: "South America", value: "co" },
          { label: "Mexico", region: "North America", value: "mx" },
          { label: "Canada", region: "North America", value: "ca" },
        ],
      });
      return { collection };
    },
    template: `
      <Item class="p-1" variant="outline">
        <Listbox.Root :collection="collection">
          <Listbox.Content>
            <Listbox.ItemGroup
              v-for="[region, items] in collection.group()"
              :key="region"
              :heading="region"
            >
              <Listbox.Item v-for="item in items" :key="item.value" :item="item">
                <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            </Listbox.ItemGroup>
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    `,
  }),
});

export const Horizontal = meta.story({
  render: () => ({
    components: { Field, Listbox },
    setup() {
      const collection = createListCollection({
        items: [
          { artist: "O Rappa", title: "Rappa Mundi" },
          { artist: "The Night Owls", title: "Acústico MTV" },
          { artist: "Neon Pulse", title: "Thriller" },
          { artist: "Eminem", title: "The Eminem Show" },
        ],
        itemToString: (item) => item.title,
        itemToValue: (item) => item.title,
      });
      return { collection };
    },
    template: `
      <Field>
        <Field.Label>Favorite album</Field.Label>
        <Listbox.Root :collection="collection" orientation="horizontal">
          <Listbox.Content class="overflow-x-auto">
            <Listbox.Item
              v-for="item in collection.items"
              :key="item.title"
              class="w-full flex-col items-start"
              :item="item"
            >
              <div class="aspect-square size-20 w-full rounded-lg bg-foreground" />
              <div>
                <Listbox.ItemText>{{ item.title }}</Listbox.ItemText>
                <p class="text-muted-foreground text-xs">{{ item.artist }}</p>
              </div>
              <Listbox.ItemIndicator class="absolute top-4 right-4 shrink-0 rounded-xs bg-background [&_svg]:text-foreground!" />
            </Listbox.Item>
          </Listbox.Content>
        </Listbox.Root>
      </Field>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { Item, Listbox },
    setup() {
      const collection = createListCollection({
        items: [
          { label: "Brazil", value: "br" },
          { label: "Mexico", value: "mx" },
          { label: "Ireland", value: "ie" },
        ],
      });
      return { collection };
    },
    template: `
      <Item class="p-1" variant="outline">
        <Listbox.Root :collection="collection" disabled>
          <Listbox.Content>
            <Listbox.Item v-for="item in collection.items" :key="item.value" :item="item">
              <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
              <Listbox.ItemIndicator />
            </Listbox.Item>
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    `,
  }),
});

export const ImageExplorer = meta.story({
  render: () => ({
    components: { Listbox },
    setup() {
      const collection = createListCollection({
        items: [
          {
            alt: "Scenic mountain view",
            label: "Mountain Landscape",
            value: "mountain",
          },
          { alt: "Ocean waves", label: "Ocean Waves", value: "ocean" },
          { alt: "Forest path", label: "Forest Path", value: "forest" },
          { alt: "City skyline", label: "City Skyline", value: "city" },
          { alt: "Desert dunes", label: "Desert Dunes", value: "desert" },
        ],
      });
      const value = ref(["mountain"]);
      const onValueChange = (next: string | string[]) => {
        value.value = Array.isArray(next) ? next : [next];
      };
      const selectedImage = computed(() =>
        collection.items.find((item) => item.value === value.value.at(0)),
      );
      return { collection, onValueChange, selectedImage, value };
    },
    template: `
      <div class="flex flex-col gap-2 sm:flex-row">
        <Listbox.Root class="w-full" :collection="collection" :onValueChange="onValueChange" :value="value">
          <Listbox.Content class="overflow-auto max-sm:flex-row">
            <Listbox.Item v-for="item in collection.items" :key="item.value" :item="item">
              <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
            </Listbox.Item>
          </Listbox.Content>
        </Listbox.Root>
        <div class="flex w-full items-end rounded-xl border bg-muted p-4">
          <div class="mt-auto">
            <h3 class="font-medium text-sm">{{ selectedImage?.label }}</h3>
            <p class="text-muted-foreground text-xs">{{ selectedImage?.alt }}</p>
          </div>
        </div>
      </div>
    `,
  }),
});

export const SelectionExtended = meta.story({
  render: () => ({
    components: { Item, Kbd, Listbox },
    setup() {
      const collection = createListCollection({
        items: [
          { label: "Brazil", value: "br" },
          { label: "Mexico", value: "mx" },
          { label: "Ireland", value: "ie" },
        ],
      });
      return { collection };
    },
    template: `
      <div class="flex flex-col gap-2">
        <p class="text-center text-muted-foreground text-sm">
          Hold <Kbd>⌘</Kbd> or <Kbd>Ctrl</Kbd> to select multiple
        </p>
        <Item class="w-full p-1" variant="outline">
          <Listbox.Root :collection="collection" selectionMode="extended">
            <Listbox.Content>
              <Listbox.Item v-for="item in collection.items" :key="item.value" :item="item">
                <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            </Listbox.Content>
          </Listbox.Root>
        </Item>
      </div>
    `,
  }),
});

export const SelectionMultiple = meta.story({
  render: () => ({
    components: { Item, Listbox },
    setup() {
      const collection = createListCollection({
        items: [
          { label: "Brazil", value: "br" },
          { label: "Mexico", value: "mx" },
          { label: "Ireland", value: "ie" },
        ],
      });
      return { collection };
    },
    template: `
      <Item class="p-1" variant="outline">
        <Listbox.Root :collection="collection" selectionMode="multiple">
          <Listbox.Content>
            <Listbox.Item v-for="item in collection.items" :key="item.value" :item="item">
              <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
              <Listbox.ItemIndicator />
            </Listbox.Item>
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    `,
  }),
});

export const SelectionNone = meta.story({
  render: () => ({
    components: { Item, Listbox, PhPencilSimple, PhPlusSquare, PhTrash, Separator },
    setup() {
      const collection = createListCollection({
        items: [
          { label: "New file", section: "actions", value: "new-file" },
          { label: "Edit file", section: "actions", value: "edit-file" },
          { label: "Delete file", section: "danger", value: "delete-file" },
        ],
      });
      return { collection };
    },
    template: `
      <Item class="p-1" variant="outline">
        <Listbox.Root aria-label="File actions" class="w-full" :collection="collection" selectionMode="none">
          <Listbox.Content>
            <Listbox.ItemGroup heading="Actions">
              <Listbox.Item :item="collection.items[0]">
                <div class="flex h-8 items-start justify-start">
                  <PhPlusSquare />
                </div>
                <div class="flex min-w-0 flex-1 flex-col">
                  <Listbox.ItemText>New file</Listbox.ItemText>
                  <span class="text-muted-foreground text-xs">Create a new file</span>
                </div>
                <Listbox.Shortcut>⌘N</Listbox.Shortcut>
              </Listbox.Item>
              <Listbox.Item :item="collection.items[1]">
                <div class="flex h-8 items-start justify-start">
                  <PhPencilSimple />
                </div>
                <div class="flex min-w-0 flex-1 flex-col">
                  <Listbox.ItemText>Edit file</Listbox.ItemText>
                  <span class="text-muted-foreground text-xs">Make changes</span>
                </div>
                <Listbox.Shortcut>⌘E</Listbox.Shortcut>
              </Listbox.Item>
            </Listbox.ItemGroup>
            <Separator />
            <Listbox.ItemGroup heading="Danger zone">
              <Listbox.Item :item="collection.items[2]" variant="destructive">
                <div class="flex h-8 items-start justify-start">
                  <PhTrash />
                </div>
                <div class="flex min-w-0 flex-1 flex-col">
                  <Listbox.ItemText>Delete file</Listbox.ItemText>
                  <span class="text-muted-foreground text-xs">Move to trash</span>
                </div>
                <Listbox.Shortcut>⌘D</Listbox.Shortcut>
              </Listbox.Item>
            </Listbox.ItemGroup>
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    `,
  }),
});

export const TransferList = meta.story({
  render: () => ({
    components: { Button, Item, Listbox, PhCaretLeft, PhCaretRight },
    setup() {
      const available = ref(["Brazil", "Ireland"]);
      const selected = ref<string[]>(["Mexico"]);
      const availableValue = ref<string[]>([]);
      const selectedValue = ref<string[]>([]);

      const availableCollection = computed(() =>
        createListCollection({
          items: available.value.map((label) => ({ label, value: label })),
        }),
      );

      const selectedCollection = computed(() =>
        createListCollection({
          items: selected.value.map((label) => ({ label, value: label })),
        }),
      );

      const onAvailableValueChange = (next: string | string[]) => {
        availableValue.value = Array.isArray(next) ? next : [next];
      };

      const onSelectedValueChange = (next: string | string[]) => {
        selectedValue.value = Array.isArray(next) ? next : [next];
      };

      const moveToSelected = () => {
        available.value = available.value.filter((item) => !availableValue.value.includes(item));
        selected.value = [...selected.value, ...availableValue.value];
        availableValue.value = [];
      };

      const moveToAvailable = () => {
        selected.value = selected.value.filter((item) => !selectedValue.value.includes(item));
        available.value = [...available.value, ...selectedValue.value];
        selectedValue.value = [];
      };

      return {
        availableCollection,
        availableValue,
        moveToAvailable,
        moveToSelected,
        onAvailableValueChange,
        onSelectedValueChange,
        selectedCollection,
        selectedValue,
      };
    },
    template: `
      <div class="flex gap-2 max-sm:flex-col">
        <Item class="w-full p-1" variant="outline">
          <Listbox.Root
            class="min-h-40"
            :collection="availableCollection"
            :onValueChange="onAvailableValueChange"
            selectionMode="multiple"
            :value="availableValue"
          >
            <Listbox.Content>
              <Listbox.ItemGroup heading="Available">
                <Listbox.Item v-for="item in availableCollection.items" :key="item.value" :item="item">
                  <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
                  <Listbox.ItemIndicator />
                </Listbox.Item>
              </Listbox.ItemGroup>
            </Listbox.Content>
          </Listbox.Root>
        </Item>
        <div class="flex flex-row-reverse justify-center gap-2 sm:flex-col">
          <Button :disabled="availableValue.length === 0" size="icon-md" variant="outline" @click="moveToSelected">
            <PhCaretRight />
          </Button>
          <Button :disabled="selectedValue.length === 0" size="icon-md" variant="outline" @click="moveToAvailable">
            <PhCaretLeft />
          </Button>
        </div>
        <Item class="w-full p-1" variant="outline">
          <Listbox.Root
            class="min-h-40"
            :collection="selectedCollection"
            :onValueChange="onSelectedValueChange"
            selectionMode="multiple"
            :value="selectedValue"
          >
            <Listbox.Content class="max-h-48 min-h-40">
              <Listbox.ItemGroup heading="Selected">
                <Listbox.Item v-for="item in selectedCollection.items" :key="item.value" :item="item">
                  <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
                  <Listbox.ItemIndicator />
                </Listbox.Item>
              </Listbox.ItemGroup>
            </Listbox.Content>
          </Listbox.Root>
        </Item>
      </div>
    `,
  }),
});

export const WithDescription = meta.story({
  render: () => ({
    components: { Item, Listbox },
    setup() {
      const collection = createListCollection({
        items: [
          {
            description: "South America's country, Portuguese speaking.",
            label: "Brazil",
            value: "br",
          },
          {
            description: "North America's country, Spanish speaking.",
            label: "Mexico",
            value: "mx",
          },
          {
            description: "Europe's country, Irish/English speaking.",
            label: "Ireland",
            value: "ie",
          },
        ],
      });
      return { collection };
    },
    template: `
      <Item class="p-1" variant="outline">
        <Listbox.Root :collection="collection">
          <Listbox.Content>
            <Listbox.Item v-for="item in collection.items" :key="item.value" :item="item">
              <div class="flex min-w-0 flex-1 flex-col gap-0.5">
                <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
                <span class="text-muted-foreground text-xs">{{ item.description }}</span>
              </div>
              <Listbox.ItemIndicator />
            </Listbox.Item>
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    `,
  }),
});

export const WithFilter = meta.story({
  render: () => ({
    components: { Input, Item, Listbox },
    setup() {
      const search = ref("");
      const filterUtils = useFilter({ sensitivity: "base" });
      const { collection, filter } = useListCollection({
        filter: filterUtils.value.contains,
        initialItems: [
          { label: "Brazil", value: "br" },
          { label: "Mexico", value: "mx" },
          { label: "Ireland", value: "ie" },
        ],
      });

      const isEmpty = computed(() => collection.value.items.length === 0 && search.value !== "");

      const onValueChange = (next: string) => {
        search.value = next;
        filter(next);
      };

      return { collection, isEmpty, onValueChange, search };
    },
    template: `
      <Item class="flex flex-col gap-2 p-1" variant="outline">
        <Input :onValueChange="onValueChange" placeholder="Search..." :value="search" />
        <Listbox.Root :collection="collection">
          <Listbox.Content>
            <Listbox.Item v-for="item in collection.items" :key="item.value" :item="item">
              <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
              <Listbox.ItemIndicator />
            </Listbox.Item>
            <Listbox.Empty v-if="isEmpty">No results found. Try a different search.</Listbox.Empty>
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    `,
  }),
});

export const WithIcon = meta.story({
  render: () => ({
    components: { Item, Listbox },
    setup() {
      const collection = createListCollection({
        items: [
          { icon: "🇧🇷", label: "Brazil", value: "brazil" },
          { icon: "🇲🇽", label: "Mexico", value: "mexico" },
          { icon: "🇮🇪", label: "Ireland", value: "ireland" },
        ],
      });
      return { collection };
    },
    template: `
      <Item class="p-1" variant="outline">
        <Listbox.Root :collection="collection">
          <Listbox.Content>
            <Listbox.Item v-for="item in collection.items" :key="item.value" :item="item">
              {{ item.icon }}
              <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
              <Listbox.ItemIndicator />
            </Listbox.Item>
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    `,
  }),
});

export const WithPopover = meta.story({
  render: () => ({
    setup() {
      const search = ref("");
      const isOpen = ref(false);
      const filterUtils = useFilter({ sensitivity: "base" });
      const { collection, filter } = useListCollection({
        filter: filterUtils.value.contains,
        initialItems: [
          { label: "Brazil", value: "br" },
          { label: "Mexico", value: "mx" },
          { label: "Ireland", value: "ie" },
          { label: "Canada", value: "ca" },
        ],
      });

      const isEmpty = computed(() => collection.value.items.length === 0 && search.value !== "");

      const onSearchChange = (next: string) => {
        search.value = next;
        filter(next);
      };

      return () =>
        h(
          Listbox.Root as ArkPart,
          {
            collection: collection.value,
            onSelect: () => {
              isOpen.value = false;
            },
          },
          () =>
            h(
              Popover as ArkPart,
              {
                onOpenChange: ({ open }: { open: boolean }) => {
                  isOpen.value = open;
                },
                open: isOpen.value,
              },
              () => [
                h(Popover.Trigger as ArkPart, { asChild: true }, () =>
                  h(Button as ArkPart, { class: "justify-between", variant: "outline" }, () => [
                    h(Listbox.ValueText as ArkPart, { placeholder: "Select framework" }),
                    h(PhCaretUpDown as ArkPart, { class: "opacity-64" }),
                  ]),
                ),
                h(Popover.Content as ArkPart, { class: "min-w-64 gap-2 p-1" }, () => [
                  h(Input as ArkPart, {
                    onValueChange: onSearchChange,
                    placeholder: "Search...",
                    value: search.value,
                  }),
                  h(Listbox.Content as ArkPart, null, () => [
                    ...collection.value.items.map((item) =>
                      h(Listbox.Item as ArkPart, { item, key: item.value }, () => [
                        h(Listbox.ItemText as ArkPart, null, () => item.label),
                        h(Listbox.ItemIndicator as ArkPart),
                      ]),
                    ),
                    isEmpty.value
                      ? h(
                          Listbox.Empty as ArkPart,
                          null,
                          () => "No results found. Try a different search.",
                        )
                      : null,
                  ]),
                ]),
              ],
            ),
        );
    },
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Item, Listbox },
    setup() {
      const collection = createListCollection({
        items: [
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
          { label: "Extra Large", value: "xl" },
        ],
      });
      const value = ref(["md"]);
      const onValueChange = (next: string | string[]) => {
        value.value = Array.isArray(next) ? next : [next];
      };
      const isLarge = computed(() => value.value.includes("lg"));
      return { collection, isLarge, onValueChange, value };
    },
    template: `
      <div class="flex flex-col gap-2">
        <p class="text-center text-muted-foreground text-sm">Selected the Large size</p>
        <Item class="p-1" variant="outline">
          <Listbox.Root :collection="collection" :onValueChange="onValueChange" :value="value">
            <Listbox.Content>
              <Listbox.Item v-for="item in collection.items" :key="item.value" :item="item">
                <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            </Listbox.Content>
          </Listbox.Root>
        </Item>
        <p class="text-center text-muted-foreground text-sm">{{ isLarge ? "✅" : "❌" }}</p>
      </div>
    `,
  }),
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `Listbox.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => ({
    components: { Listbox },
    setup() {
      const collection = createListCollection({
        items: [
          { label: "Brazil", value: "br" },
          { label: "Mexico", value: "mx" },
          { label: "Ireland", value: "ie" },
        ],
      });
      return { collection };
    },
    template: `
      <Listbox.Root :collection="collection" :defaultValue="['br']">
        <Listbox.Content>
          <Listbox.Item v-for="item in collection.items" :key="item.value" :item="item">
            <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
            <Listbox.ItemIndicator />
          </Listbox.Item>
        </Listbox.Content>
      </Listbox.Root>
    `,
  }),
});
