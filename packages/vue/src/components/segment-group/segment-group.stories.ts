import { SegmentGroup } from "@pisagor/vue";
import { computed, ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: SegmentGroup,
  parameters: {
    docs: {
      description: {
        component: "Lets users switch between discrete options.",
      },
    },
    metadata: {
      aliases: ["segmented-control"],
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Indicator: SegmentGroup.Indicator,
    Item: SegmentGroup.Item,
    ItemText: SegmentGroup.ItemText,
    Root: SegmentGroup.Root,
  },
  title: "Components/Forms/Segment Group",
});

const segmentItems = [
  { label: "Profile", value: "Profile" },
  { label: "Account", value: "Account" },
  { label: "Security", value: "Security" },
  { label: "Notifications", value: "Notifications" },
];

export const Default = meta.story({
  render: () => ({
    components: { SegmentGroup },
    setup() {
      return {
        items: [
          { label: "Alpha", value: "a" },
          { label: "Beta", value: "b" },
          { label: "Gamma", value: "c" },
        ],
      };
    },
    template: '<SegmentGroup :items="items" :value="\'b\'" />',
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { SegmentGroup },
    setup() {
      return { items: segmentItems };
    },
    template: `
      <div class="flex flex-col gap-2">
        <SegmentGroup class="rounded-lg" defaultValue="Profile" :items="items" variant="default" />
        <SegmentGroup defaultValue="Profile" :items="items" variant="underline" />
        <SegmentGroup
          defaultValue="Profile"
          :items="items"
          orientation="vertical"
          variant="underline"
        />
      </div>
    `,
  }),
});

export const OrientationHorizontal = meta.story({
  render: () => ({
    components: { SegmentGroup },
    setup() {
      return { items: segmentItems };
    },
    template: `
      <SegmentGroup
        class="rounded-lg"
        defaultValue="Profile"
        :items="items"
        orientation="horizontal"
      />
    `,
  }),
});

export const OrientationVertical = meta.story({
  render: () => ({
    components: { SegmentGroup },
    setup() {
      return { items: segmentItems };
    },
    template: `
      <SegmentGroup
        class="rounded-lg"
        defaultValue="Profile"
        :items="items"
        orientation="vertical"
      />
    `,
  }),
});

export const DisabledItem = meta.story({
  render: () => ({
    components: { SegmentGroup },
    setup() {
      return {
        items: segmentItems.map((item) =>
          item.value === "Security" ? { ...item, disabled: true } : item,
        ),
      };
    },
    template: `
      <SegmentGroup class="rounded-lg" defaultValue="Profile" :items="items" />
    `,
  }),
});

export const CustomIndicator = meta.story({
  render: () => ({
    components: { SegmentGroup },
    setup() {
      const items = ["Profile", "Account", "Security", "Notifications"];
      return { items };
    },
    template: `
      <SegmentGroup.Root
        class="rounded-lg *:data-[slot=segment-group-indicator]:bg-primary/40"
        defaultValue="Profile"
      >
        <SegmentGroup.Item
          v-for="item in items"
          :key="item"
          class="px-2 py-1.5 text-sm"
          :disabled="item === 'Security'"
          :value="item"
        >
          {{ item }}
        </SegmentGroup.Item>
      </SegmentGroup.Root>
    `,
  }),
});

export const IndicatorOnHover = meta.story({
  render: () => ({
    components: { SegmentGroup },
    setup() {
      const pages = ["Profile", "Account", "Security", "Notifications"];
      const value = ref("Profile");
      const hoverValue = ref<string | null>(null);
      const activeValue = computed(() => hoverValue.value ?? value.value);
      const onValueChange = (next: string | null) => {
        value.value = next ?? "Profile";
      };
      return { activeValue, hoverValue, onValueChange, pages, value };
    },
    template: `
      <SegmentGroup.Root class="rounded-lg" :value="activeValue" :onValueChange="onValueChange">
        <SegmentGroup.Item
          v-for="page in pages"
          :key="page"
          class="px-2 py-1.5 text-sm"
          :value="page"
          @click="value = page"
          @mouseenter="hoverValue = page"
          @mouseleave="hoverValue = null"
        >
          {{ page }}
        </SegmentGroup.Item>
      </SegmentGroup.Root>
    `,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { SegmentGroup },
    setup() {
      return { items: segmentItems };
    },
    template: `
      <SegmentGroup class="rounded-lg" defaultValue="Profile" disabled :items="items" />
    `,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { SegmentGroup },
    setup() {
      const value = ref<string | null>("Profile");
      const onValueChange = (next: string | null) => {
        value.value = next;
      };
      return { items: segmentItems, onValueChange, value };
    },
    template: `
      <SegmentGroup class="rounded-lg" :items="items" :value="value" :onValueChange="onValueChange" />
    `,
  }),
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `SegmentGroup.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => ({
    components: { SegmentGroup },
    setup() {
      const items = ["Profile", "Account", "Security", "Notifications"];
      return { items };
    },
    template: `
      <SegmentGroup.Root class="rounded-lg" defaultValue="Profile">
        <SegmentGroup.Item
          v-for="item in items"
          :key="item"
          class="px-2 py-1.5 text-sm"
          :value="item"
        >
          {{ item }}
        </SegmentGroup.Item>
      </SegmentGroup.Root>
    `,
  }),
});
