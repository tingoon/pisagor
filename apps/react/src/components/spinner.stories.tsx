import { Spinner } from "@pisagor/react";
import * as Examples from "@pisagor/react/spinner/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component:
          "Shows that something is loading when the wait time is short and a progress bar is not needed.",
      },
    },
  },
  title: "Components/Feedback/Spinner",
});

export const Playground = meta.story({
  render: Examples.Sizes,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Sizes,
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});
