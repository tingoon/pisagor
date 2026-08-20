import { fn } from "storybook/test";
import preview from "#/storybook/preview";
import { NumberField } from "./number-field";

const meta = preview.meta({
  component: NumberField,
  parameters: {
    docs: {
      description: {
        component:
          "Combines Field and NumberInput with steppers, label, and optional error message.",
      },
    },
  },
  title: "Forms/Fields/Number Field",
});

export const Default = meta.story({
  args: {
    description: "Choose between 1 and 10.",
    id: "number-field-quantity",
    label: "Quantity",
    max: 10,
    min: 1,
    onValueChange: fn(),
    placeholder: "0",
  },
});

export const Invalid = meta.story({
  args: {
    error: "Quantity must be at least 1.",
    id: "number-field-quantity-invalid",
    invalid: true,
    label: "Quantity",
    max: 10,
    min: 1,
    onValueChange: fn(),
    value: 0,
  },
});

export const Disabled = meta.story({
  args: {
    description: "Choose between 1 and 10.",
    disabled: true,
    id: "number-field-quantity-disabled",
    label: "Quantity",
    max: 10,
    min: 1,
    onValueChange: fn(),
    placeholder: "0",
  },
});
