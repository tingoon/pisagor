import { NavigationMenu } from "@pisagor/react";
import preview from "#/storybook/preview";
import * as Examples from "#/react/examples/navigation/navigation-menu";

const meta = preview.meta({
  component: NavigationMenu,
  parameters: {
    docs: {
      description: {
        component:
          "Displays a horizontal set of navigation links so users can move between top-level sections.",
      },
    },
  },
  title: "Components/Navigation/Navigation Menu",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Wrapping = meta.story({
  render: Examples.Wrapping,
});

export const Submenu = meta.story({
  render: Examples.Submenu,
});

export const CustomRecipe = meta.story({
  render: Examples.CustomRecipe,
});
