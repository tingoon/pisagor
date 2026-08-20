import { fn } from "storybook/test";
import preview from "#/storybook/preview";
import { TextField } from "./text-field";

const meta = preview.meta({
  component: TextField,
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
        component: "Combines Field and Input with label, description, and optional error message.",
      },
    },
  },
  title: "Forms/Fields/Text Field",
});

export const Default = meta.story({
  args: {
    autoComplete: "email",
    id: "text-field-email",
    label: "Email",
    onValueChange: fn(),
    placeholder: "you@example.com",
    type: "email",
  },
});

export const Invalid = meta.story({
  args: {
    autoComplete: "email",
    error: "Please enter a valid email address.",
    id: "text-field-email-invalid",
    invalid: true,
    label: "Email",
    onValueChange: fn(),
    placeholder: "you@example.com",
    type: "email",
    value: "not-an-email",
  },
});

export const Disabled = meta.story({
  args: {
    autoComplete: "email",
    disabled: true,
    id: "text-field-email-disabled",
    label: "Email",
    onValueChange: fn(),
    placeholder: "you@example.com",
    type: "email",
  },
});
