import { Highlight } from "@pisagor/astro/highlight";
import DefaultExample from "#/astro/examples/highlight/default.astro";
import MultipleExample from "#/astro/examples/highlight/multiple.astro";
import preview from "#/storybook/preview";

const meta = preview.meta({
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
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: () => ({ component: DefaultExample }),
});

export const Multiple = meta.story({
  render: () => ({ component: MultipleExample }),
});
