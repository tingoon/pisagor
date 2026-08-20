import { fn } from "storybook/test";
import preview from "#/storybook/preview";
import { PasswordField } from "./password-field";

const meta = preview.meta({
  component: PasswordField,
  parameters: {
    docs: {
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
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
});

export const WithLabelAccessory = meta.story({
  args: {
    autoComplete: "current-password",
    id: "password-field-accessory",
    label: "Password",
    labelAccessory: (
      <a
        className="ml-auto text-sm underline-offset-4 hover:underline"
        href="https://example.com/forgot-password"
      >
        Forgot password?
      </a>
    ),
    labelProps: {
      className: "w-full",
    },
    onValueChange: fn(),
    placeholder: "Enter your password",
  },
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
});
