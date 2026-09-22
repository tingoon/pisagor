import { NumberField } from "@pisagor/vue-form";
import * as Examples from "@pisagor/vue-form/number-field/examples";
import { fn } from "storybook/test";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

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
  render: (args) => ({
    components: { NumberField },
    setup: () => ({ args }),
    template: `<NumberField v-bind="args" />`,
  }),
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});
