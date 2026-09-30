import { Kbd } from "@pisagor/astro/kbd";
import DefaultExample from "#/astro/examples/kbd/default.astro";
import GroupExample from "#/astro/examples/kbd/group.astro";

export default {
  component: Kbd,
  parameters: {
    docs: {
      description: {
        component: "Displays keyboard shortcuts and key combinations.",
      },
    },
  },
  title: "Components/Data Display/Kbd",
};

export const Playground = {
  args: {
    slots: { default: "⌘" },
  },
  tags: ["autodocs"],
};

export const Default = {
  render: () => ({ component: DefaultExample }),
};

export const Group = {
  render: () => ({ component: GroupExample }),
};
