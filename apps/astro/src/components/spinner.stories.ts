import { Spinner } from "@pisagor/astro";
import * as Examples from "#/astro/examples/spinner";
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
  render: () => ({ component: Examples.Default }),
});

export const Sizes = meta.story({
  render: () => ({ component: Examples.Sizes }),
});
