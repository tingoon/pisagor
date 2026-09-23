import { RadioGroup } from "@pisagor/react";
import * as Examples from "@pisagor/react/radio-group/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component: "Lets users pick exactly one option from a small set of related choices.",
      },
    },
  },
  title: "Components/Forms/Radio Group",
});

export const Playground = meta.story({
  args: {
    defaultValue: "1",
    items: [
      { label: "Default", value: "1" },
      { label: "Comfortable", value: "2" },
      { label: "Compact", value: "3" },
    ],
  },
  tags: ["autodocs"],
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

export const WithDescription = meta.story({
  render: Examples.WithDescription,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Compound = meta.story({
  render: Examples.Compound,
});

export const Default = meta.story({
  render: Examples.Default,
});
