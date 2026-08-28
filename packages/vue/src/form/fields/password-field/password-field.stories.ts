import { fn } from "storybook/test";
import { h } from "vue";
import preview from "#/storybook/preview";
import { PasswordField } from "./password-field";

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

export const Default = meta.story({
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
});

export const WithLabelAccessory = meta.story({
  render: () => ({
    components: { PasswordField },
    setup: () => ({
      labelAccessory: h(
        "a",
        {
          class: "ml-auto text-sm underline-offset-4 hover:underline",
          href: "https://example.com/forgot-password",
        },
        "Forgot password?",
      ),
      onValueChange: fn(),
    }),
    template: `<PasswordField
      auto-complete="current-password"
      id="password-field-accessory"
      label="Password"
      :label-accessory="labelAccessory"
      :label-props="{ class: 'w-full' }"
      :on-value-change="onValueChange"
      placeholder="Enter your password"
    />`,
  }),
});

export const Invalid = meta.story({
  args: {
    autoComplete: "new-password",
    error: "Password must be at least 8 characters.",
    id: "password-field-invalid",
    invalid: true,
    label: "Password",
    onValueChange: fn(),
    placeholder: "Enter your password",
    value: "short",
  },
  render: (args) => ({
    components: { PasswordField },
    setup: () => ({ args }),
    template: `<PasswordField v-bind="args" />`,
  }),
});

export const Disabled = meta.story({
  args: {
    autoComplete: "current-password",
    disabled: true,
    id: "password-field-disabled",
    label: "Password",
    onValueChange: fn(),
    placeholder: "Enter your password",
  },
  render: (args) => ({
    components: { PasswordField },
    setup: () => ({ args }),
    template: `<PasswordField v-bind="args" />`,
  }),
});
