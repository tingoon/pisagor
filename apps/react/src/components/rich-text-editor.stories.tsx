import { RichTextEditor } from "@pisagor/react/rich-text-editor";
import * as Examples from "@pisagor/react/rich-text-editor/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: RichTextEditor,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users write and format rich text with common styles such as bold, lists, and emphasis.",
      },
    },
  },
  title: "Components/Forms/Rich Text Editor",
});

export const Playground = meta.story({
  args: {
    defaultValue: "<p>Write release notes with <strong>bold</strong> and lists.</p>",
  },
  tags: ["autodocs"],
});

export const Compound = meta.story({
  render: Examples.Compound,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});
