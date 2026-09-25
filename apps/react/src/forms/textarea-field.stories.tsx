import { TextareaField } from "@pisagor/react-form";
import * as Examples from "@pisagor/react-form/textarea-field/examples";
import { fn } from "storybook/test";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: TextareaField,
  parameters: {
    docs: {
      description: {
        component:
          "Collects multiple lines of text with a label and optional validation message.",
      },
    },
  },
  title: "Forms/Fields/Textarea Field",
});

export const Playground = meta.story({
  args: {
    id: "textarea-field-bio",
    label: "Bio",
    onValueChange: fn(),
    placeholder: "Tell us about yourself…",
  },
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});
