import { PhGear, PhShield, PhUser } from "@phosphor-icons/vue";
import { Button, Tabs } from "@pisagor/vue";
import { h, ref } from "vue";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component:
          "Organizes related content into panels that users switch between without leaving the page.",
      },
    },
    metadata: {
      aliases: ["tablist"],
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Content: Tabs.Content,
    List: Tabs.List,
    Root: Tabs.Root,
    Trigger: Tabs.Trigger,
  },
  title: "Components/Navigation/Tabs",
});

export const Default = meta.story({
  render: () => ({
    components: { Tabs },
    setup() {
      return { items: profileTabs() };
    },
    template: `<Tabs default-value="tab-1" :items="items" />`,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { Tabs },
    setup() {
      return {
        defaultItems: variantTabs("Default variant"),
        underlineItems: variantTabs("Underline variant"),
        verticalItems: variantTabs("Underline + vertical"),
      };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Tabs default-value="tab-1" :items="defaultItems" />
        <Tabs default-value="tab-1" :items="underlineItems" variant="underline" />
        <Tabs
          default-value="tab-1"
          :items="verticalItems"
          orientation="vertical"
          variant="underline"
        />
      </div>
    `,
  }),
});

export const OrientationHorizontal = meta.story({
  render: () => ({
    components: { Tabs },
    setup() {
      return { items: numberedTabs() };
    },
    template: `<Tabs default-value="tab-1" :items="items" />`,
  }),
});

export const OrientationVertical = meta.story({
  render: () => ({
    components: { Tabs },
    setup() {
      return { items: numberedTabs() };
    },
    template: `<Tabs default-value="tab-1" :items="items" orientation="vertical" />`,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { Tabs },
    setup() {
      return {
        items: profileTabs().map((tab) =>
          tab.value === "tab-2" ? { ...tab, disabled: true } : tab,
        ),
      };
    },
    template: `<Tabs default-value="tab-1" :items="items" />`,
  }),
});

export const WithIcons = meta.story({
  render: () => ({
    components: { Tabs },
    setup() {
      return {
        items: [
          {
            content: h(
              "p",
              { class: "p-4 text-center text-muted-foreground text-xs" },
              "Profile content",
            ),
            label: () => [h(PhUser), " Profile"],
            value: "tab-1",
          },
          {
            content: h(
              "p",
              { class: "p-4 text-center text-muted-foreground text-xs" },
              "Settings content",
            ),
            label: () => [h(PhGear), " Settings"],
            value: "tab-2",
          },
          {
            content: h(
              "p",
              { class: "p-4 text-center text-muted-foreground text-xs" },
              "Security content",
            ),
            label: () => [h(PhShield), " Security"],
            value: "tab-3",
          },
        ],
      };
    },
    template: `<Tabs default-value="tab-1" :items="items" />`,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Button, Tabs },
    setup() {
      const value = ref("profile");
      const onValueChange = (details: { value: string }) => {
        value.value = details.value;
      };
      const items = [
        {
          content: h(
            "p",
            { class: "text-muted-foreground text-sm" },
            "Manage your profile information and preferences.",
          ),
          label: "Profile",
          value: "profile",
        },
        {
          content: h(
            "p",
            { class: "text-muted-foreground text-sm" },
            "Customize notifications, theme, and text density.",
          ),
          label: "Settings",
          value: "settings",
        },
        {
          content: h(
            "p",
            { class: "text-muted-foreground text-sm" },
            "Update your password and security settings.",
          ),
          label: "Security",
          value: "security",
        },
      ];

      return { items, onValueChange, value };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Tabs :items="items" :onValueChange="onValueChange" :value="value" />
        <div class="flex gap-2">
          <Button size="sm" variant="outline" @click="value = 'profile'">Go to Profile</Button>
          <Button size="sm" variant="outline" @click="value = 'settings'">Go to Settings</Button>
          <Button size="sm" variant="outline" @click="value = 'security'">Go to Security</Button>
        </div>
      </div>
    `,
  }),
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `Tabs.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => ({
    components: { Tabs },
    template: `
      <Tabs.Root default-value="tab-1">
        <Tabs.List>
          <Tabs.Trigger value="tab-1">Profile</Tabs.Trigger>
          <Tabs.Trigger value="tab-2">Settings</Tabs.Trigger>
          <Tabs.Trigger value="tab-3">Security</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-1">
          Profile content
        </Tabs.Content>
        <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-2">
          Settings content
        </Tabs.Content>
        <Tabs.Content class="p-4 text-center text-muted-foreground text-xs" value="tab-3">
          Security content
        </Tabs.Content>
      </Tabs.Root>
    `,
  }),
});

function profileTabs() {
  return [
    {
      content: h(
        "p",
        { class: "p-4 text-center text-muted-foreground text-xs" },
        "Profile content",
      ),
      label: "Profile",
      value: "tab-1",
    },
    {
      content: h(
        "p",
        { class: "p-4 text-center text-muted-foreground text-xs" },
        "Settings content",
      ),
      label: "Settings",
      value: "tab-2",
    },
    {
      content: h(
        "p",
        { class: "p-4 text-center text-muted-foreground text-xs" },
        "Security content",
      ),
      label: "Security",
      value: "tab-3",
    },
  ];
}

function numberedTabs() {
  return [
    {
      content: h("p", { class: "p-4 text-center text-muted-foreground text-xs" }, "Content 1"),
      label: "Tab 1",
      value: "tab-1",
    },
    {
      content: h("p", { class: "p-4 text-center text-muted-foreground text-xs" }, "Content 2"),
      label: "Tab 2",
      value: "tab-2",
    },
    {
      content: h("p", { class: "p-4 text-center text-muted-foreground text-xs" }, "Content 3"),
      label: "Tab 3",
      value: "tab-3",
    },
  ];
}

function variantTabs(activeLabel: string) {
  return [
    {
      content: h("p", { class: "p-4 text-center text-muted-foreground text-xs" }, activeLabel),
      label: "Profile",
      value: "tab-1",
    },
    {
      content: h("p", { class: "p-4 text-center text-muted-foreground text-xs" }, "Content 2"),
      label: "Settings",
      value: "tab-2",
    },
    {
      content: h("p", { class: "p-4 text-center text-muted-foreground text-xs" }, "Content 3"),
      label: "Security",
      value: "tab-3",
    },
  ];
}
