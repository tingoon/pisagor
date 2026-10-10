import { Combobox } from "@pisagor/react";
import * as Examples from "#/react/examples/combobox";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Combobox,
  parameters: {
    docs: {
      description: {
        component:
          "Internal selection engine that combines search with a filterable list. Prefer Select, Autocomplete, or Listbox in application code.",
      },
    },
  },
  title: "Components/Forms/Combobox",
});

export const Playground = meta.story({
  args: {
    items: [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
      { label: "Date", value: "date" },
    ],
  },
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});

export const WithStartIcon = meta.story({
  render: Examples.WithStartIcon,
});

export const WithClearButton = meta.story({
  render: Examples.WithClearButton,
});

export const Multiple = meta.story({
  render: Examples.Multiple,
});

export const Group = meta.story({
  render: Examples.Group,
});

export const WithScroll = meta.story({
  render: Examples.WithScroll,
});

export const Compound = meta.story({
  render: Examples.Compound,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const Autohighlight = meta.story({
  render: Examples.Autohighlight,
});

export const CustomRecipe = meta.story({
  render: Examples.CustomRecipe,
});
