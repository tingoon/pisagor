import { FileUpload } from "@pisagor/react";
import * as Examples from "#/react/examples/file-upload";
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
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Dropzone = meta.story({
  render: Examples.Dropzone,
});

export const Trigger = meta.story({
  render: Examples.Trigger,
});

export const MultipleFiles = meta.story({
  render: Examples.MultipleFiles,
});

export const AcceptedFileTypes = meta.story({
  render: Examples.AcceptedFileTypes,
});

export const DirectoryUpload = meta.story({
  render: Examples.DirectoryUpload,
});

export const MediaCapture = meta.story({
  render: Examples.MediaCapture,
});

export const CustomPreview = meta.story({
  render: Examples.CustomPreview,
});

export const ClearTrigger = meta.story({
  render: Examples.ClearTrigger,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const CustomSpacing = meta.story({
  render: Examples.CustomSpacing,
});

export const CustomRecipe = meta.story({
  render: Examples.CustomRecipe,
});
