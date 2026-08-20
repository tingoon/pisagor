import { RichTextEditor } from "@pisagor/react/rich-text-editor";
import { useState } from "react";
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
    metadata: {
      aliases: ["wysiwyg", "rte"],
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Content: RichTextEditor.Content,
    Root: RichTextEditor.Root,
    Toolbar: RichTextEditor.Toolbar,
  },
  title: "Components/Forms/Rich Text Editor",
});

export const Default = meta.story({
  args: {
    defaultValue: "<p>Write release notes with <strong>bold</strong> and lists.</p>",
  },
});

export const Disabled = meta.story({
  args: {
    defaultValue: "<p>This editor is unavailable.</p>",
    disabled: true,
  },
});

export const Invalid = meta.story({
  args: {
    defaultValue: "<p></p>",
    invalid: true,
  },
});

export const Controlled = meta.story({
  render: () => {
    const [value, setValue] = useState("<p>Controlled content</p>");

    return (
      <div className="flex w-full flex-col gap-3">
        <RichTextEditor onValueChange={setValue} value={value} />
        <pre className="overflow-auto rounded-lg bg-muted p-3 text-xs">{value}</pre>
      </div>
    );
  },
});

export const Compound = meta.story({
  render: () => (
    <RichTextEditor.Root defaultValue="<p>Compose the toolbar and content yourself.</p>">
      <RichTextEditor.Toolbar />
      <RichTextEditor.Content />
    </RichTextEditor.Root>
  ),
});
