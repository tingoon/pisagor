import { File } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/file/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: File.Root,
  parameters: {
    docs: {
      description: {
        component:
          "Represents a file such as an uploaded attachment or downloadable document with its name and metadata.",
      },
    },
  },
  title: "Components/Data Display/File",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const WithActions = meta.story({
  render: exampleRender(Examples.WithActions),
});

export const Compound = meta.story({
  render: exampleRender(Examples.Compound),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
