import { Highlight } from "@pisagor/astro";
import * as Examples from "#/astro/examples/highlight";
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
  render: () => ({ component: Examples.Default }),
});

export const Multiple = meta.story({
  render: () => ({ component: Examples.Multiple }),
});
