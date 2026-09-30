import { RichTextEditorField } from "@pisagor/react-form";
import { fn } from "storybook/test";
import * as Examples from "#/react-form/examples/rich-text-editor-field";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: RichTextEditorField,
  parameters: {
    docs: {
      description: {
        component:
          "Edits formatted text with a toolbar, label, and optional validation message.",
      },
    },
  },
  title: "Forms/Fields/Rich Text Editor Field",
});

export const Playground = meta.story({
  args: {
    defaultValue: "<p>Write a short announcement…</p>",
    id: "rich-text-editor-field-body",
    label: "Body",
    onValueChange: fn(),
  },
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});
