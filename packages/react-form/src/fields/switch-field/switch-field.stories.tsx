import { fn } from "storybook/test";
import preview from "#/storybook/preview";
import { SwitchField } from "./switch-field";

const meta = preview.meta({
  component: SwitchField,
  parameters: {
    docs: {
      description: {
        component: "Toggles a setting on or off with a label and optional validation message.",
      },
    },
  },
  title: "Forms/Fields/Switch Field",
});

export const Default = meta.story({
  args: {
    description: "Get release updates by email.",
    id: "switch-field-notifications",
    label: "Enable notifications",
    onValueChange: fn(),
  },
});

export const Invalid = meta.story({
  args: {
    error: "You must enable notifications to continue.",
    id: "switch-field-notifications-invalid",
    invalid: true,
    label: "Enable notifications",
    onValueChange: fn(),
  },
});

export const Disabled = meta.story({
  args: {
    description: "Get release updates by email.",
    disabled: true,
    id: "switch-field-notifications-disabled",
    label: "Enable notifications",
    onValueChange: fn(),
  },
});
