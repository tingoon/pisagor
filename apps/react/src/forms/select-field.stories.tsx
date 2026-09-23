import { SelectField } from "@pisagor/react-form";
import * as Examples from "@pisagor/react-form/select-field/examples";
import { fn } from "storybook/test";
import { countryOptions } from "#/storybook/fixtures";
import preview from "#/storybook/preview";

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

export const Playground = meta.story({
  args: {
    description: "Used for shipping estimates.",
    id: "select-field-country",
    items: countryOptions,
    label: "Country",
    onValueChange: fn(),
    placeholder: "Select a country",
  },
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});
