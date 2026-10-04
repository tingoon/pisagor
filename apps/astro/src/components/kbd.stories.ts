import { Kbd } from "@pisagor/astro";
import DefaultExample from "#/astro/examples/kbd/default.astro";
import GroupExample from "#/astro/examples/kbd/group.astro";
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
  render: () => ({ component: DefaultExample }),
});

export const Group = meta.story({
  render: () => ({ component: GroupExample }),
});
