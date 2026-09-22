import { RichTextEditorField } from "@pisagor/vue-form";
import * as Examples from "@pisagor/vue-form/rich-text-editor-field/examples";
import { fn } from "storybook/test";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: RichTextEditorField,
  parameters: {
    docs: {
      description: {
        component:
          "Combines Field and RichTextEditor with label, description, and optional error message.",
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
  render: (args) => ({
    components: { RichTextEditorField },
    setup: () => ({ args }),
    template: `<RichTextEditorField v-bind="args" />`,
  }),
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});
