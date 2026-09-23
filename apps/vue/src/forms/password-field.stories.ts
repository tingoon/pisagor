import { PasswordField } from "@pisagor/vue-form";
import * as Examples from "@pisagor/vue-form/password-field/examples";
import { fn } from "storybook/test";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: PasswordField,
  parameters: {
    docs: {
      description: {
        component:
          "Combines Field and PasswordInput with show-hide control, label, and optional error message.",
      },
    },
  },
  title: "Forms/Fields/Password Field",
});

export const Playground = meta.story({
  args: {
    autoComplete: "current-password",
    id: "password-field",
    label: "Password",
    onValueChange: fn(),
    placeholder: "Enter your password",
  },
  render: (args) => ({
    components: { PasswordField },
    setup: () => ({ args }),
    template: `<PasswordField v-bind="args" />`,
  }),
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const WithLabelAccessory = meta.story({
  render: exampleRender(Examples.WithLabelAccessory),
});
