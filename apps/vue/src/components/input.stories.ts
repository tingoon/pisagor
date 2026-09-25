import { Input } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/input/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

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

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const OnSurface = meta.story({
  render: exampleRender(Examples.OnSurface),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
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

export const WithField = meta.story({
  render: exampleRender(Examples.WithField),
});

export const Clearable = meta.story({
  render: exampleRender(Examples.Clearable),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
