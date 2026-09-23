import { Toggle } from "@pisagor/react";
import * as Examples from "@pisagor/react/toggle/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component:
          "Stays pressed or released to turn a single option on or off, similar to a checkbox styled as a button.",
      },
    },
  },
  title: "Components/Actions/Toggle",
});

export const Playground = meta.story({
  args: {
    children: "Toggle",
  },
  tags: ["autodocs"],
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const IconGroup = meta.story({
  render: Examples.IconGroup,
});

export const WithIcon = meta.story({
  render: Examples.WithIcon,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Default = meta.story({
  render: Examples.Default,
});
