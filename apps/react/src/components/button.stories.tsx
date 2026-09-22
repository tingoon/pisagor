import { Button } from "@pisagor/react";
import * as Examples from "@pisagor/react/button/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "Triggers an action or navigation when clicked, with styles that reflect how important the action is.",
      },
    },
  },
  title: "Components/Actions/Button",
});

export const Playground = meta.story({
  args: {
    children: "Button",
  },
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const CustomColor = meta.story({
  render: Examples.CustomColor,
});

export const Pill = meta.story({
  render: Examples.Pill,
});

export const NoClickEffect = meta.story({
  render: Examples.NoClickEffect,
});

export const Icon = meta.story({
  render: Examples.Icon,
});

export const AsChild = meta.story({
  render: Examples.AsChild,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Loading = meta.story({
  render: Examples.Loading,
});

export const WithIcon = meta.story({
  render: Examples.WithIcon,
});
