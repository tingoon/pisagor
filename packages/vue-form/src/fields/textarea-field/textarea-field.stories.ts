import { fn } from "storybook/test";
import preview from "#/storybook/preview";
import { TextareaField } from "./textarea-field";

const meta = preview.meta({
  component: TextareaField,
  parameters: {
    docs: {
      description: {
        component:
          "Combines Field and Textarea with label, description, and optional error message.",
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
  render: (args) => ({
    components: { TextareaField },
    setup: () => ({ args }),
    template: `<TextareaField v-bind="args" />`,
  }),
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
  render: (args) => ({
    components: { TextareaField },
    setup: () => ({ args }),
    template: `<TextareaField v-bind="args" />`,
  }),
});

export const Disabled = meta.story({
  args: {
    disabled: true,
    id: "textarea-field-bio-disabled",
    label: "Bio",
    onValueChange: fn(),
    placeholder: "Tell us about yourself…",
  },
  render: (args) => ({
    components: { TextareaField },
    setup: () => ({ args }),
    template: `<TextareaField v-bind="args" />`,
  }),
});
