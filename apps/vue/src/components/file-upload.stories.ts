import { FileUpload } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/file-upload/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

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

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const OnSurface = meta.story({
  render: exampleRender(Examples.OnSurface),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const CustomSpacing = meta.story({
  render: exampleRender(Examples.CustomSpacing),
});

export const AcceptedFileTypes = meta.story({
  render: exampleRender(Examples.AcceptedFileTypes),
});

export const ClearTrigger = meta.story({
  render: exampleRender(Examples.ClearTrigger),
});

export const CustomPreview = meta.story({
  render: exampleRender(Examples.CustomPreview),
});

export const DirectoryUpload = meta.story({
  render: exampleRender(Examples.DirectoryUpload),
});

export const Dropzone = meta.story({
  render: exampleRender(Examples.Dropzone),
});

export const MediaCapture = meta.story({
  render: exampleRender(Examples.MediaCapture),
});

export const MultipleFiles = meta.story({
  render: exampleRender(Examples.MultipleFiles),
});

export const Trigger = meta.story({
  render: exampleRender(Examples.Trigger),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
