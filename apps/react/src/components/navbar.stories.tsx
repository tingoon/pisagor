import { Navbar } from "@pisagor/react";
import * as Examples from "#/react/examples/navbar";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Navbar,
  parameters: {
    docs: {
      description: {
        component:
          "Top application bar with brand, navigation, and action slots. Pair with Sidebar for dashboard layouts.",
      },
    },
  },
  title: "Components/Navigation/Navbar",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const WithSidebar = meta.story({
  render: Examples.WithSidebar,
});

export const CustomRecipe = meta.story({
  render: Examples.CustomRecipe,
});
