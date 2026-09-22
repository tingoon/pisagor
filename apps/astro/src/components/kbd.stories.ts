import { Kbd } from "@pisagor/astro/kbd";
import DefaultExample from "@pisagor/astro/kbd/examples/default.astro";
import GroupExample from "@pisagor/astro/kbd/examples/group.astro";

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
