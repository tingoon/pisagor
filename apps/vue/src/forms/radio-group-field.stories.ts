import { RadioGroupField } from "@pisagor/vue-form";
import * as Examples from "@pisagor/vue-form/radio-group-field/examples";
import { fn } from "storybook/test";
import { exampleRender } from "#/storybook/example-render";
import { planOptions } from "#/storybook/fixtures";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: RadioGroupField,
  parameters: {
    docs: {
      description: {
        component:
          "Combines Field and RadioGroup for selecting one option with optional error message.",
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
  render: (args) => ({
    components: { RadioGroupField },
    setup: () => ({ args }),
    template: `<RadioGroupField v-bind="args" />`,
  }),
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});
