import { fn } from "storybook/test";
import preview from "#/storybook/preview";
import { TextareaField } from "./textarea-field";

const meta = preview.meta({
  component: TextareaField,
  parameters: {
    docs: {
      description: {
        component: "Collects multiple lines of text with a label and optional validation message.",
      },
    },
  },
  title: "Forms/Fields/Textarea Field",
});

export const Default = meta.story({
  args: {
    id: "textarea-field-bio",
    label: "Bio",
    onValueChange: fn(),
    placeholder: "Tell us about yourself…",
  },
});

export const Invalid = meta.story({
  args: {
    error: "Please enter a short bio.",
    id: "textarea-field-bio-invalid",
    invalid: true,
    label: "Bio",
    onValueChange: fn(),
    placeholder: "Tell us about yourself…",
  },
});

export const Disabled = meta.story({
  args: {
    disabled: true,
    id: "textarea-field-bio-disabled",
    label: "Bio",
    onValueChange: fn(),
    placeholder: "Tell us about yourself…",
  },
});
