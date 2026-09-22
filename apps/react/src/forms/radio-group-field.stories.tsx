import { RadioGroupField } from "@pisagor/react-form";
import * as Examples from "@pisagor/react-form/radio-group-field/examples";
import { fn } from "storybook/test";
import { planOptions } from "#/storybook/fixtures";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: RadioGroupField,
  parameters: {
    docs: {
      description: {
        component:
          "Lets the user pick one option from a short list with an optional validation message.",
      },
    },
  },
  title: "Forms/Fields/Radio Group Field",
});

export const Playground = meta.story({
  args: {
    description: "You can change this anytime in billing settings.",
    id: "radio-group-field-plan",
    label: "Plan",
    onValueChange: fn(),
    options: planOptions,
  },
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});
