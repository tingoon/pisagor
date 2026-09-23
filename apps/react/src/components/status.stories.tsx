import { Status } from "@pisagor/react";
import * as Examples from "@pisagor/react/status/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Status,
  parameters: {
    docs: {
      description: {
        component:
          "Signals state with a small colored dot so users can see availability or severity at a glance.",
      },
    },
  },
  title: "Components/Feedback/Status",
});

export const Playground = meta.story({
  render: Examples.CustomColor,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.CustomColor,
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const CustomColor = meta.story({
  render: Examples.CustomColor,
});

export const CustomSize = meta.story({
  render: Examples.CustomSize,
});

export const WithIcon = meta.story({
  render: Examples.WithIcon,
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});
