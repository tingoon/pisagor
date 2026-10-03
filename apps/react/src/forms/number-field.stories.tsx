import { NumberField } from "@pisagor/react-form";
import { fn } from "storybook/test";
import * as Examples from "#/react-form/examples/number-field";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: NumberField,
  parameters: {
    docs: {
      description: {
        component:
          "Adjusts a numeric value with steppers, label, and optional validation message.",
      },
    },
  },
  title: "Forms/Fields/Number Field",
});

export const Playground = meta.story({
  args: {
    description: "Choose between 1 and 10.",
    id: "number-field-quantity",
    label: "Quantity",
    max: 10,
    min: 1,
    onValueChange: fn(),
    placeholder: "0",
  },
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});
