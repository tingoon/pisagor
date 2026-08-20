import { FileInput, Surface } from "@pisagor/vue";
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
    metadata: {
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Forms/File Input",
});

export const Default = meta.story({
  render: () => ({
    components: { FileInput },
    template: "<FileInput />",
  }),
});

export const Sizes = meta.story({
  render: () => ({
    components: { FileInput },
    template: `
      <div class="flex flex-col gap-2">
        <FileInput size="sm" />
        <FileInput size="md" />
        <FileInput size="lg" />
      </div>
    `,
  }),
});

export const Variants = meta.story({
  render: () => ({
    components: { FileInput },
    template: `
      <div class="flex flex-col gap-2">
        <FileInput variant="primary" />
        <FileInput variant="secondary" />
      </div>
    `,
  }),
});

export const OnSurface = meta.story({
  parameters: { layout: "fullscreen" },
  render: () => ({
    components: { FileInput, Surface },
    template: `
      <Surface bordered padding="md" variant="default">
        <div class="flex flex-col gap-2">
          <FileInput variant="primary" />
          <FileInput variant="secondary" />
        </div>
      </Surface>
    `,
  }),
});

export const Multiple = meta.story({
  render: () => ({
    components: { FileInput },
    template: "<FileInput multiple />",
  }),
});

export const Accept = meta.story({
  render: () => ({
    components: { FileInput },
    template: '<FileInput accept="image/png,image/jpeg" />',
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { FileInput },
    template: "<FileInput disabled />",
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { FileInput },
    template: "<FileInput invalid />",
  }),
});

export const OnFilesChange = meta.story({
  render: () => ({
    components: { FileInput },
    setup() {
      const onFilesChange = () => undefined;
      return { onFilesChange };
    },
    template: '<FileInput accept="image/*" multiple :on-files-change="onFilesChange" />',
  }),
});
