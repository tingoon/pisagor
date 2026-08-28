import { fn } from "storybook/test";
import preview from "#/storybook/preview";
import { FileField } from "./file-field";

const meta = preview.meta({
  component: FileField,
  parameters: {
    docs: {
      description: {
        component: "Uploads one or more files with a label and optional validation message.",
      },
    },
  },
  title: "Forms/Fields/File Field",
});

export const Default = meta.story({
  args: {
    accept: "image/*",
    id: "file-field-avatar",
    label: "Avatar",
    onValueChange: fn(),
  },
});

export const Invalid = meta.story({
  args: {
    error: "Please choose a file.",
    id: "file-field-avatar-invalid",
    invalid: true,
    label: "Avatar",
    onValueChange: fn(),
  },
});

export const Disabled = meta.story({
  args: {
    disabled: true,
    id: "file-field-avatar-disabled",
    label: "Avatar",
    onValueChange: fn(),
  },
});
