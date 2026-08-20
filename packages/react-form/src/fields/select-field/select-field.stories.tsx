import { fn } from "storybook/test";
import preview from "#/storybook/preview";
import { SelectField } from "./select-field";

const meta = preview.meta({
  component: SelectField,
  parameters: {
    docs: {
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
      description: {
        component: "Combines Field and Select with label, helper text, and optional error message.",
      },
    },
  },
  title: "Forms/Fields/Select Field",
});

export const Default = meta.story({
  args: {
    description: "Used for shipping estimates.",
    id: "select-field-country",
    items: countryOptions(),
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
    items: countryOptions(),
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
    items: countryOptions(),
    label: "Country",
    onValueChange: fn(),
    placeholder: "Select a country",
  },
});

function countryOptions() {
  return [
    { label: "Brazil", value: "br" },
    { label: "Ireland", value: "ie" },
    { label: "Mexico", value: "mx" },
  ];
}
