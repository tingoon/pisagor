import { Stat } from "@pisagor/astro/stat";

export default {
  component: Stat,
  parameters: {
    docs: {
      description: {
        component:
          "Highlights a key metric with an optional label, description, and trend.",
      },
    },
  },
  title: "Components/Data Display/Stat",
};

export const Playground = {
  args: {
    description: "+20.1% from last month",
    label: "Total Revenue",
    value: "$45,231.89",
  },
  tags: ["autodocs"],
};
