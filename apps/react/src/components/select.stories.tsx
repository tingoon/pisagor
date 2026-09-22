import { Select } from "@pisagor/react";
import * as Examples from "@pisagor/react/select/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Select,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users choose one option from a dropdown list when screen space for all choices is limited.",
      },
    },
  },
  title: "Components/Forms/Select",
});

export const Playground = meta.story({
  args: {
    items: ["Banana", "Apple", "Orange", "Pineapple"],
    placeholder: "Select a fruit",
  },
  tags: ["autodocs"],
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Empty = meta.story({
  render: Examples.Empty,
});

export const Grouping = meta.story({
  render: Examples.Grouping,
});

export const MaxSelection = meta.story({
  render: Examples.MaxSelection,
});

export const Multiple = meta.story({
  render: Examples.Multiple,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const WithScroll = meta.story({
  render: Examples.WithScroll,
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
