import { Separator } from "@pisagor/astro";
import * as Examples from "#/astro/examples/separator";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Separator,
  parameters: {
    docs: {
      description: {
        component: "Visually divides related content into clear sections.",
      },
    },
  },
  title: "Components/Layout/Separator",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: () => ({ component: Examples.Default }),
});

export const Vertical = meta.story({
  render: () => ({ component: Examples.Vertical }),
});
