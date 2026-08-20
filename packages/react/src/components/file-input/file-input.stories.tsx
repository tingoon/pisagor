import { FileInput } from "@pisagor/react";
import preview, { SurfaceDecorator } from "#/react/preview";

const meta = preview.meta({
  component: FileInput,
  parameters: {
    docs: {
      api: "closed",
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
      description: {
        component:
          "Captures one or more files from the user with native file-picker styling aligned to Input.",
      },
      taxonomy: "primitive",
    },
  },
  title: "Components/Forms/File Input",
});

export const Default = meta.story({});

export const Sizes = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <FileInput size="sm" />
      <FileInput size="md" />
      <FileInput size="lg" />
    </div>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <FileInput variant="primary" />
      <FileInput variant="secondary" />
    </div>
  ),
});

export const OnSurface = Variants.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const Multiple = meta.story({
  args: {
    multiple: true,
  },
});

export const Accept = meta.story({
  args: {
    accept: "image/png,image/jpeg",
  },
});

export const Disabled = meta.story({
  args: {
    disabled: true,
  },
});

export const Invalid = meta.story({
  args: {
    invalid: true,
  },
});

export const OnFilesChange = meta.story({
  args: {
    accept: "image/*",
    multiple: true,
    onFilesChange: () => undefined,
  },
});
