import { Tabs } from "@pisagor/react";
import * as Examples from "@pisagor/react/tabs/examples";
import { profileTabs } from "#/storybook/fixtures";
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
  },
  title: "Components/Navigation/Tabs",
});

export const Playground = meta.story({
  args: {
    defaultValue: "tab-1",
    items: profileTabs(),
  },
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const OrientationHorizontal = meta.story({
  render: Examples.OrientationHorizontal,
});

export const OrientationVertical = meta.story({
  render: Examples.OrientationVertical,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const WithIcons = meta.story({
  render: Examples.WithIcons,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Compound = meta.story({
  render: Examples.Compound,
});

export const Default = meta.story({
  render: Examples.Default,
});
