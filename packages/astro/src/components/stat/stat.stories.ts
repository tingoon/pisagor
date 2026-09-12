import Stat from "./stat.astro";

export default {
  component: Stat,
  parameters: {
    docs: {
      description: {
        component: "Highlights a key metric with an optional label, description, and trend.",
      },
    },
    metadata: {
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  title: "Components/Data Display/Stat",
};

export const Default = {
  args: {
    description: "+20.1% from last month",
    label: "Total Revenue",
    value: "$45,231.89",
  },
};
