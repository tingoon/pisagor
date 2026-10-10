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

export const Variants = meta.story({
  render: () => ({ component: Examples.Variants }),
});

export const KbdGroup = meta.story({
  render: () => ({ component: Examples.KbdGroup }),
});

export const WithButton = meta.story({
  render: () => ({ component: Examples.WithButton }),
});

export const CustomRecipe = meta.story({
  render: () => ({ component: Examples.CustomRecipe }),
});
