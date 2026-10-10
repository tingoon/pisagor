import { FileField } from "@pisagor/vue-form";
import { fn } from "storybook/test";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue-form/examples/file-field";

const meta = preview.meta({
  component: FileField,
  parameters: {
    docs: {
      description: {
        component:
          "Combines Field and FileInput for uploading one or more files with validation.",
      },
    },
  },
  title: "Forms/Fields/File Field",
});

export const Playground = meta.story({
  args: {
    accept: "image/*",
    id: "file-field-avatar",
    label: "Avatar",
    onValueChange: fn(),
  },
  render: (args) => ({
    components: { FileField },
    setup: () => ({ args }),
    template: `<FileField v-bind="args" />`,
  }),
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});
