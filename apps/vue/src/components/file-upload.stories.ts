import { FileUpload } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/file-upload";

const meta = preview.meta({
  component: FileUpload,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users choose files to upload with drag-and-drop or a file picker and shows upload progress.",
      },
    },
  },
  title: "Components/Forms/File Upload",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const Dropzone = meta.story({
  render: exampleRender(Examples.Dropzone),
});

export const Trigger = meta.story({
  render: exampleRender(Examples.Trigger),
});

export const MultipleFiles = meta.story({
  render: exampleRender(Examples.MultipleFiles),
});

export const AcceptedFileTypes = meta.story({
  render: exampleRender(Examples.AcceptedFileTypes),
});

export const DirectoryUpload = meta.story({
  render: exampleRender(Examples.DirectoryUpload),
});

export const MediaCapture = meta.story({
  render: exampleRender(Examples.MediaCapture),
});

export const CustomPreview = meta.story({
  render: exampleRender(Examples.CustomPreview),
});

export const ClearTrigger = meta.story({
  render: exampleRender(Examples.ClearTrigger),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const CustomSpacing = meta.story({
  render: exampleRender(Examples.CustomSpacing),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
