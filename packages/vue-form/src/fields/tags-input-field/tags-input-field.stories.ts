import { fn } from "storybook/test";
import preview from "#/storybook/preview";
import { TagsInputField } from "./tags-input-field";

const meta = preview.meta({
  component: TagsInputField,
  parameters: {
    docs: {
      description: {
        component: "Combines Field and TagsInput for multi-value tag entry with validation.",
      },
    },
  },
  title: "Forms/Fields/Tags Input Field",
});

export const Default = meta.story({
  args: {
    id: "tags-input-field-skills",
    label: "Skills",
    onValueChange: fn(),
    placeholder: "Add a skill",
  },
  render: (args) => ({
    components: { TagsInputField },
    setup: () => ({ args }),
    template: `<TagsInputField v-bind="args" />`,
  }),
});

export const Invalid = meta.story({
  args: {
    error: "Add at least one skill.",
    id: "tags-input-field-skills-invalid",
    invalid: true,
    label: "Skills",
    onValueChange: fn(),
  },
  render: (args) => ({
    components: { TagsInputField },
    setup: () => ({ args }),
    template: `<TagsInputField v-bind="args" />`,
  }),
});

export const Disabled = meta.story({
  args: {
    disabled: true,
    id: "tags-input-field-skills-disabled",
    label: "Skills",
    onValueChange: fn(),
    value: ["TypeScript"],
  },
  render: (args) => ({
    components: { TagsInputField },
    setup: () => ({ args }),
    template: `<TagsInputField v-bind="args" />`,
  }),
});
