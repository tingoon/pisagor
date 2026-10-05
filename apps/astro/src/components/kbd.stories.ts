import { Kbd } from "@pisagor/astro";
import * as Examples from "#/astro/examples/kbd";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Kbd,
  parameters: {
    docs: {
      description: {
        component: "Displays keyboard shortcuts and key combinations.",
      },
    },
  },
  title: "Components/Data Display/Kbd",
});

export const Playground = meta.story({
  args: {
    slots: { default: "⌘" },
  },
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: () => ({ component: Examples.Default }),
});

export const Group = meta.story({
  render: () => ({ component: Examples.Group }),
});
