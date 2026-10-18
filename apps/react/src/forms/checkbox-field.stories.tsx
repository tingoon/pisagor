import { CheckboxField } from "@pisagor/react-form";
import { fn } from "storybook/test";
import preview from "#/storybook/preview";
import * as Examples from "#/react-form/examples/fields/checkbox-field";

const meta = preview.meta({
  component: CheckboxField,
  parameters: {
    docs: {
      description: {
        component:
          "Lets the user confirm a choice with a checkbox, label, and optional validation message.",
      },
    },
  },
  title: "Forms/Fields/Checkbox Field",
});

export const Playground = meta.story({
  args: {
    id: "checkbox-field-terms",
    label: "I accept the terms and conditions",
    onValueChange: fn(),
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
