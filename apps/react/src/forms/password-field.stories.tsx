import { PasswordField } from "@pisagor/react-form";
import * as Examples from "@pisagor/react-form/password-field/examples";
import { fn } from "storybook/test";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: PasswordField,
  parameters: {
    docs: {
      description: {
        component:
          "Captures a password with show-hide control, label, and optional validation message.",
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
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const WithLabelAccessory = meta.story({
  render: Examples.WithLabelAccessory,
});
