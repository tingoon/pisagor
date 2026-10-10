import { Input } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/input";

const meta = preview.meta({
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          "Captures a single line of text from the user for names, search terms, and other short values.",
      },
    },
  },
  title: "Components/Forms/Input",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const Clearable = meta.story({
  render: exampleRender(Examples.Clearable),
});

export const File = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Prefer `FileInput` for file selection. See Components/Forms/File Input.",
      },
    },
  },
  render: exampleRender(Examples.File),
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

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
