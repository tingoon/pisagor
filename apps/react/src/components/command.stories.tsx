import { Command } from "@pisagor/react";
import * as Examples from "@pisagor/react/command/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Command,
  parameters: {
    docs: {
      description: {
        component:
          "Offers a searchable command palette for jumping to actions, pages, or settings from the keyboard.",
      },
    },
  },
  title: "Components/Overlay/Command",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Scrollable = meta.story({
  render: Examples.Scrollable,
});

export const Shortcuts = meta.story({
  render: Examples.Shortcuts,
});

export const WithDialog = meta.story({
  render: Examples.WithDialog,
});

export const Groups = meta.story({
  render: Examples.Groups,
});

export const WithFooter = meta.story({
  render: Examples.WithFooter,
});

export const Default = meta.story({
  render: Examples.Default,
});
