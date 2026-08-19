import { fn } from "storybook/test";
import preview from "#/react/preview";
import { TagsInputField } from "./tags-input-field";

const meta = preview.meta({
  component: TagsInputField,
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
