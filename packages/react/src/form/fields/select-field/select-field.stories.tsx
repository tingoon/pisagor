import { fn } from "storybook/test";
import preview from "#/storybook/preview";
import { SelectField } from "./select-field";

const meta = preview.meta({
  component: SelectField,
  parameters: {
    docs: {
      description: {
        component:
          "Lets the user pick one option from a dropdown with label and optional validation message.",
      },
    },
  },
  title: "Forms/Fields/Select Field",
});

const countryOptions = [
  { label: "Brazil", value: "br" },
  { label: "Ireland", value: "ie" },
  { label: "Mexico", value: "mx" },
];

export const Default = meta.story({
  args: {
    description: "Used for shipping estimates.",
    id: "select-field-country",
    items: countryOptions,
    label: "Country",
    onValueChange: fn(),
    placeholder: "Select a country",
  },
});

export const Invalid = meta.story({
  args: {
    error: "Please select a country.",
    id: "select-field-country-invalid",
    invalid: true,
    items: countryOptions,
    label: "Country",
    onValueChange: fn(),
    placeholder: "Select a country",
  },
});

export const Disabled = meta.story({
  args: {
    description: "Used for shipping estimates.",
    disabled: true,
    id: "select-field-country-disabled",
    items: countryOptions,
    label: "Country",
    onValueChange: fn(),
    placeholder: "Select a country",
  },
});
