import { fn } from "storybook/test";
import preview from "#/storybook/preview";
import { FileField } from "./file-field";

const meta = preview.meta({
  component: FileField,
  parameters: {
    docs: {
      description: {
        component: "Combines Field and FileInput for uploading one or more files with validation.",
      },
    },
  },
  title: "Forms/Fields/File Field",
});

export const Default = meta.story({
  args: { accept: "image/*", id: "file-field-avatar", label: "Avatar", onValueChange: fn() },
  render: (args) => ({
    components: { FileField },
    setup: () => ({ args }),
    template: `<FileField v-bind="args" />`,
  }),
});

export const Invalid = meta.story({
  args: {
    error: "Please choose a file.",
    id: "file-field-avatar-invalid",
    invalid: true,
    label: "Avatar",
    onValueChange: fn(),
  },
  render: (args) => ({
    components: { FileField },
    setup: () => ({ args }),
    template: `<FileField v-bind="args" />`,
  }),
});

export const Disabled = meta.story({
  args: { disabled: true, id: "file-field-avatar-disabled", label: "Avatar", onValueChange: fn() },
  render: (args) => ({
    components: { FileField },
    setup: () => ({ args }),
    template: `<FileField v-bind="args" />`,
  }),
});
