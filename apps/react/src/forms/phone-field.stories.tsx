import { PhoneField } from "@pisagor/react-form";
import * as Examples from "@pisagor/react-form/phone-field/examples";
import { fn } from "storybook/test";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: PhoneField,
  parameters: {
    docs: {
      description: {
        component:
          "Collects a phone number with country selection and optional validation message.",
      },
    },
  },
  title: "Forms/Fields/Phone Field",
});

export const Playground = meta.story({
  args: {
    defaultCountry: "US",
    id: "phone-field",
    label: "Phone number",
    onValueChange: fn(),
    placeholder: "Enter phone number",
  },
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});
