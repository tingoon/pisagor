import { Sidebar } from "@pisagor/react";
import * as Examples from "@pisagor/react/sidebar/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Sidebar,
  parameters: {
    docs: {
      description: {
        component:
          "Provides a collapsible application sidebar with keyboard shortcut, mobile sheet fallback, and nested menu primitives.",
      },
    },
  },
  title: "Components/Navigation/Sidebar",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});
