import { fn } from "storybook/test";
import preview from "#/react/preview";
import { RichTextEditorField } from "./rich-text-editor-field";

const meta = preview.meta({
  component: RichTextEditorField,
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
          "Combines Field and RichTextEditor with label, description, and optional error message.",
      },
    },
  },
  title: "Forms/Fields/Rich Text Editor Field",
});

export const Default = meta.story({
  args: {
    defaultValue: "<p>Write a short announcement…</p>",
    id: "rich-text-editor-field-body",
    label: "Body",
    onValueChange: fn(),
  },
});

export const Invalid = meta.story({
  args: {
    error: "Please enter some content.",
    id: "rich-text-editor-field-body-invalid",
    invalid: true,
    label: "Body",
    onValueChange: fn(),
  },
});

export const Disabled = meta.story({
  args: {
    defaultValue: "<p>Write a short announcement…</p>",
    disabled: true,
    id: "rich-text-editor-field-body-disabled",
    label: "Body",
    onValueChange: fn(),
  },
});
