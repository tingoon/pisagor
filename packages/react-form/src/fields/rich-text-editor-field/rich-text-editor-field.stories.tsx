import { fn } from "storybook/test";
import preview from "#/storybook/preview";
import { RichTextEditorField } from "./rich-text-editor-field";

const meta = preview.meta({
  component: RichTextEditorField,
  parameters: {
    docs: {
      description: {
        component: "Edits formatted text with a toolbar, label, and optional validation message.",
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
