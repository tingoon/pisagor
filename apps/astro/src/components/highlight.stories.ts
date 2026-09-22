import { Highlight } from "@pisagor/astro/highlight";
import DefaultExample from "@pisagor/astro/highlight/examples/default.astro";
import MultipleExample from "@pisagor/astro/highlight/examples/multiple.astro";

export default {
  component: Highlight,
  parameters: {
    docs: {
      description: {
        component:
          "Emphasizes matching words inside text so search results and queries are easier to spot.",
      },
    },
  },
  title: "Components/Data Display/Highlight",
};

export const Playground = {
  tags: ["autodocs"],
};

export const Default = {
  render: () => ({ component: DefaultExample }),
};

export const Multiple = {
  render: () => ({ component: MultipleExample }),
};
