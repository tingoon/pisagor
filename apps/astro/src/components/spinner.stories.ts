import { Spinner } from "@pisagor/astro/spinner";
import DefaultExample from "#/astro/examples/spinner/default.astro";
import SizesExample from "#/astro/examples/spinner/sizes.astro";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: "Shows that content or an action is still loading.",
      },
    },
  },
  title: "Components/Feedback/Spinner",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: () => ({ component: DefaultExample }),
});

export const Sizes = meta.story({
  render: () => ({ component: SizesExample }),
});
