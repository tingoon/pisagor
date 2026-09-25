import { Switch } from "@pisagor/react";
import * as Examples from "@pisagor/react/switch/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Switch,
  parameters: {
    docs: {
      description: {
        component:
          "Toggles a setting on or off with immediate visual feedback.",
      },
    },
  },
  title: "Components/Forms/Switch",
});

export const Playground = meta.story({
  render: Examples.Default,
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

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Default = meta.story({
  render: Examples.Default,
});
