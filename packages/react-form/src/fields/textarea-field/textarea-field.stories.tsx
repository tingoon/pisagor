import { fn } from "storybook/test";
import preview from "#/react/preview";
import { TextareaField } from "./textarea-field";

const meta = preview.meta({
  component: TextareaField,
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
