import { fn } from "storybook/test";
import preview from "#/storybook/preview";
import { TagsInputField } from "./tags-input-field";

const meta = preview.meta({
  component: TagsInputField,
  parameters: {
    docs: {
      description: {
        component: "Adds and removes multiple tags with a label and optional validation message.",
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
});

export const Invalid = meta.story({
  args: {
    error: "Add at least one skill.",
    id: "tags-input-field-skills-invalid",
    invalid: true,
    label: "Skills",
    onValueChange: fn(),
  },
});

export const Disabled = meta.story({
  args: {
    disabled: true,
    id: "tags-input-field-skills-disabled",
    label: "Skills",
    onValueChange: fn(),
    value: ["TypeScript"],
  },
});
