import { CheckboxField } from "@pisagor/vue-form";
import * as Examples from "@pisagor/vue-form/checkbox-field/examples";
import { fn } from "storybook/test";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: CheckboxField,
  parameters: {
    docs: {
      description: {
        component:
          "Combines Field and Checkbox with label, description, and optional error message.",
      },
    },
  },
  title: "Forms/Fields/Checkbox Field",
});

export const Playground = meta.story({
  args: {
    id: "checkbox-field-terms",
    label: "I accept the terms and conditions",
    onCheckedChange: fn(),
  },
  render: (args) => ({
    components: { CheckboxField },
    setup: () => ({ args }),
    template: `<CheckboxField v-bind="args" />`,
  }),
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});
