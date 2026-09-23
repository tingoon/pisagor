import { Avatar } from "@pisagor/astro/avatar";
import DefaultExample from "@pisagor/astro/avatar/examples/default.astro";
import SizesExample from "@pisagor/astro/avatar/examples/sizes.astro";
import WithImageExample from "@pisagor/astro/avatar/examples/with-image.astro";

export default {
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: "Shows a user or entity with an image or fallback initials.",
      },
    },
  },
  title: "Components/Data Display/Avatar",
};

export const Playground = {
  args: {
    fallback: "AB",
  },
  tags: ["autodocs"],
};

export const Default = {
  render: () => ({ component: DefaultExample }),
};

export const Sizes = {
  render: () => ({ component: SizesExample }),
};

export const WithImage = {
  render: () => ({ component: WithImageExample }),
};
