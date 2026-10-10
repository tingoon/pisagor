import { SwitchField } from "@pisagor/vue-form";
import { fn } from "storybook/test";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue-form/examples/switch-field";

const meta = preview.meta({
  component: SwitchField,
  parameters: {
    docs: {
      description: {
        component:
          "Combines Field and Switch with label, helper text, and optional error message.",
      },
    },
  },
  title: "Forms/Fields/Switch Field",
});

export const Playground = meta.story({
  args: {
    description: "Get release updates by email.",
    id: "switch-field-notifications",
    label: "Enable notifications",
    onValueChange: fn(),
  },
  render: (args) => ({
    components: { SwitchField },
    setup: () => ({ args }),
    template: `<SwitchField v-bind="args" />`,
  }),
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});
