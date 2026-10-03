import { AutocompleteField } from "@pisagor/react-form";
import { fn } from "storybook/test";
import * as Examples from "#/react-form/examples/autocomplete-field";
import { cityOptions } from "#/storybook/fixtures";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: AutocompleteField,
  parameters: {
    docs: {
      description: {
        component:
          "Collects text with typeahead suggestions, label, and optional validation message.",
      },
    },
  },
  title: "Forms/Fields/Autocomplete Field",
});

export const Playground = meta.story({
  args: {
    description: "Start typing to filter options.",
    id: "autocomplete-field-city",
    items: cityOptions,
    label: "City",
    onValueChange: fn(),
  },
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});
