import { Avatar } from "@pisagor/astro/avatar";
import DefaultExample from "#/astro/examples/avatar/default.astro";
import SizesExample from "#/astro/examples/avatar/sizes.astro";
import WithImageExample from "#/astro/examples/avatar/with-image.astro";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: "Shows a user or entity with an image or fallback initials.",
      },
    },
  },
  title: "Components/Data Display/Avatar",
});

export const Playground = meta.story({
  args: {
    fallback: "AB",
  },
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: () => ({ component: DefaultExample }),
});

export const Sizes = meta.story({
  render: () => ({ component: SizesExample }),
});

export const WithImage = meta.story({
  render: () => ({ component: WithImageExample }),
});
