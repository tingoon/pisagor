import { RichTextEditor } from "@pisagor/vue/rich-text-editor";
import * as Examples from "@pisagor/vue/rich-text-editor/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const Compound = meta.story({
  render: exampleRender(Examples.Compound),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});
