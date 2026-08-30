import { fn } from "storybook/test";
import preview from "#/storybook/preview";
import { AutocompleteField } from "./autocomplete-field";

const meta = preview.meta({
  component: AutocompleteField,
  parameters: {
    docs: {
      description: {
        component:
          "Combines Field and Autocomplete with label, description, and optional error message.",
      },
    },
  },
  title: "Forms/Fields/Autocomplete Field",
});

const cityOptions = [
  { label: "Dublin", value: "dublin" },
  { label: "Mexico City", value: "mexico-city" },
  { label: "Sao Paulo", value: "sao-paulo" },
];

export const Default = meta.story({
  args: {
    description: "Start typing to filter options.",
    id: "autocomplete-field-city",
    items: cityOptions,
    label: "City",
    onValueChange: fn(),
  },
  render: (args) => ({
    components: { AutocompleteField },
    setup: () => ({ args }),
    template: `<AutocompleteField v-bind="args" />`,
  }),
});

export const Invalid = meta.story({
  args: {
    error: "Please select a city.",
    id: "autocomplete-field-city-invalid",
    invalid: true,
    items: cityOptions,
    label: "City",
    onValueChange: fn(),
  },
  render: (args) => ({
    components: { AutocompleteField },
    setup: () => ({ args }),
    template: `<AutocompleteField v-bind="args" />`,
  }),
});

export const Disabled = meta.story({
  args: {
    description: "Start typing to filter options.",
    disabled: true,
    id: "autocomplete-field-city-disabled",
    items: cityOptions,
    label: "City",
    onValueChange: fn(),
  },
  render: (args) => ({
    components: { AutocompleteField },
    setup: () => ({ args }),
    template: `<AutocompleteField v-bind="args" />`,
  }),
});
