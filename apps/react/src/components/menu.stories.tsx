import { Menu } from "@pisagor/react";
import * as Examples from "@pisagor/react/menu/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Menu,
  parameters: {
    docs: {
      description: {
        component:
          "Always-visible list of navigation links or actions. For popup menus opened from a trigger, use Dropdown Menu.",
      },
    },
  },
  title: "Components/Navigation/Menu",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const WithGroups = meta.story({
  render: Examples.WithGroups,
});
