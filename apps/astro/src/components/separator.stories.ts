import { Separator } from "@pisagor/astro/separator";
import DefaultExample from "#/astro/examples/separator/default.astro";
import VerticalExample from "#/astro/examples/separator/vertical.astro";
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
  render: () => ({ component: DefaultExample }),
});

export const Vertical = meta.story({
  render: () => ({ component: VerticalExample }),
});
