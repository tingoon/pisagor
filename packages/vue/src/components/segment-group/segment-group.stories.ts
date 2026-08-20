import { SegmentGroup } from "@pisagor/vue";
import { computed, ref } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: SegmentGroup,
  parameters: {
    docs: {
      description: {
        component: "Lets users switch between discrete options.",
      },
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
      const items = ["Profile", "Account", "Security", "Notifications"];
      return { items };
    },
    template: `
      <div class="flex flex-col gap-2">
        <SegmentGroup.Root class="rounded-lg" defaultValue="Profile" variant="default">
          <SegmentGroup.Item
            v-for="item in items"
            :key="item"
            class="px-2 py-1.5 text-sm"
            :value="item"
          >
            {{ item }}
          </SegmentGroup.Item>
        </SegmentGroup.Root>
        <SegmentGroup.Root defaultValue="Profile" variant="underline">
          <SegmentGroup.Item
            v-for="item in items"
            :key="item"
            class="px-2 py-1.5 text-sm"
            :value="item"
          >
            {{ item }}
          </SegmentGroup.Item>
        </SegmentGroup.Root>
        <SegmentGroup.Root defaultValue="Profile" orientation="vertical" variant="underline">
          <SegmentGroup.Item
            v-for="item in items"
            :key="item"
            class="px-2 py-1.5 text-sm"
            :value="item"
          >
            {{ item }}
          </SegmentGroup.Item>
        </SegmentGroup.Root>
      </div>
    `,
  }),
});

export const OrientationHorizontal = meta.story({
  render: () => ({
    components: { SegmentGroup },
    setup() {
      const items = ["Profile", "Account", "Security", "Notifications"];
      return { items };
    },
    template: `
      <SegmentGroup.Root class="rounded-lg" defaultValue="Profile" orientation="horizontal">
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

export const OrientationVertical = meta.story({
  render: () => ({
    components: { SegmentGroup },
    setup() {
      const items = ["Profile", "Account", "Security", "Notifications"];
      return { items };
    },
    template: `
      <SegmentGroup.Root class="rounded-lg" defaultValue="Profile" orientation="vertical">
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

export const DisabledItem = meta.story({
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
          :disabled="item === 'Security'"
          :value="item"
        >
          {{ item }}
        </SegmentGroup.Item>
      </SegmentGroup.Root>
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
      const items = ["Profile", "Account", "Security", "Notifications"];
      return { items };
    },
    template: `
      <SegmentGroup.Root class="rounded-lg" defaultValue="Profile" disabled>
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

export const Controlled = meta.story({
  render: () => ({
    components: { SegmentGroup },
    setup() {
      const items = ["Profile", "Account", "Security", "Notifications"];
      const value = ref<string | null>("Profile");
      const onValueChange = (next: string | null) => {
        value.value = next;
      };
      return { items, onValueChange, value };
    },
    template: `
      <SegmentGroup.Root class="rounded-lg" :value="value" :onValueChange="onValueChange">
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
