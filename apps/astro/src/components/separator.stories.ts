import { Separator } from "@pisagor/astro/separator";
import DefaultExample from "#/astro/examples/separator/default.astro";
import VerticalExample from "#/astro/examples/separator/vertical.astro";

export default {
  component: Separator,
  parameters: {
    docs: {
      description: {
        component: "Visually divides related content into clear sections.",
      },
    },
  },
  title: "Components/Layout/Separator",
};

export const Playground = {
  tags: ["autodocs"],
};

export const Default = {
  render: () => ({ component: DefaultExample }),
};

export const Vertical = {
  render: () => ({ component: VerticalExample }),
};
