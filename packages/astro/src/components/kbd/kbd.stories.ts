import Kbd from "./kbd.astro";
import KbdGroup from "./kbd-group.astro";

export default {
  component: Kbd,
  parameters: {
    docs: {
      description: {
        component: "Displays keyboard shortcuts and key combinations.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "primitive",
    },
  },
  title: "Components/Data Display/Kbd",
};

export const Default = {
  args: {
    slots: { default: "⌘" },
  },
};

export const Group = {
  render: () => ({
    component: KbdGroup,
    slots: {
      default: [
        { component: Kbd, slots: { default: "⌘" } },
        { component: Kbd, slots: { default: "K" } },
      ],
    },
  }),
};
