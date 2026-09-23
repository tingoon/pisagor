import { Autocomplete } from "@pisagor/react";
import * as Examples from "@pisagor/react/autocomplete/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Autocomplete,
  parameters: {
    docs: {
      description: {
        component:
          "Helps users pick one option from a long list by typing to filter suggestions as they go.",
      },
    },
  },
  title: "Components/Forms/Autocomplete",
});

export const Playground = meta.story({
  args: {
    clearable: true,
    items: [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
      { label: "Date", value: "date" },
    ],
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

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const Group = meta.story({
  render: Examples.Group,
});

export const WithClearButton = meta.story({
  render: Examples.WithClearButton,
});

export const WithStartIcon = meta.story({
  render: Examples.WithStartIcon,
});

export const WithTrigger = meta.story({
  render: Examples.WithTrigger,
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
