import { TextField } from "@pisagor/react-form";
import * as Examples from "@pisagor/react-form/text-field/examples";
import { fn } from "storybook/test";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: "Collects a single line of text with a label and optional validation message.",
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
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});
