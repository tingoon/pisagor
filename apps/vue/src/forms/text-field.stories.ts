import { TextField } from "@pisagor/vue-form";
import { fn } from "storybook/test";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue-form/examples/text-field";

const meta = preview.meta({
  component: TextField,
  parameters: {
    docs: {
      description: {
        component:
          "Combines Field and Input with label, description, and optional error message.",
      },
    },
  },
  title: "Forms/Fields/Text Field",
});

export const Playground = meta.story({
  args: {
    autoComplete: "email",
    id: "text-field-email",
    label: "Email",
    onValueChange: fn(),
    placeholder: "you@example.com",
    type: "email",
  },
  render: (args) => ({
    components: { TextField },
    setup: () => ({ args }),
    template: `<TextField v-bind="args" />`,
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
