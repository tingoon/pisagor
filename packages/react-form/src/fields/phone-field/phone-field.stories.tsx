import { fn } from "storybook/test";
import preview from "#/react/preview";
import { PhoneField } from "./phone-field";

const meta = preview.meta({
  component: PhoneField,
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
        component:
          "Combines Field and PhoneInput with country selection and optional error message.",
      },
    },
  },
  title: "Forms/Fields/Phone Field",
});

export const Default = meta.story({
  args: {
    defaultCountry: "US",
    id: "phone-field",
    label: "Phone number",
    onValueChange: fn(),
    placeholder: "Enter phone number",
  },
});

export const Invalid = meta.story({
  args: {
    defaultCountry: "US",
    error: "Please enter a phone number.",
    id: "phone-field-invalid",
    invalid: true,
    label: "Phone number",
    onValueChange: fn(),
    placeholder: "Enter phone number",
  },
});

export const Disabled = meta.story({
  args: {
    defaultCountry: "US",
    disabled: true,
    id: "phone-field-disabled",
    label: "Phone number",
    onValueChange: fn(),
    placeholder: "Enter phone number",
  },
});
