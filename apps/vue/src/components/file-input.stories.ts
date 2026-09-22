import { FileInput } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/file-input/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: FileInput,
  parameters: {
    docs: {
      description: {
        component:
          "Captures one or more files from the user with native file-picker styling aligned to Input.",
      },
    },
  },
  title: "Components/Forms/File Input",
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

export const Multiple = meta.story({
  render: exampleRender(Examples.Multiple),
});

export const Accept = meta.story({
  render: exampleRender(Examples.Accept),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const OnFilesChange = meta.story({
  render: exampleRender(Examples.OnFilesChange),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
