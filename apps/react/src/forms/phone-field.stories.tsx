import { PhoneField } from "@pisagor/react-form";
import { fn } from "storybook/test";
import * as Examples from "#/react-form/examples/phone-field";
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

export const Default = meta.story({
  render: Examples.Default,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});
