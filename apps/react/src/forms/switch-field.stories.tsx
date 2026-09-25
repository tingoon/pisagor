import { SwitchField } from "@pisagor/react-form";
import * as Examples from "@pisagor/react-form/switch-field/examples";
import { fn } from "storybook/test";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: SwitchField,
  parameters: {
    docs: {
      description: {
        component:
          "Toggles a setting on or off with a label and optional validation message.",
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
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});
