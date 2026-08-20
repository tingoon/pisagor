import { Field, SignaturePad } from "@pisagor/react";
import { useState } from "react";
import preview, { SurfaceDecorator } from "#/react/preview";

const meta = preview.meta({
  component: SignaturePad,
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
        component: "Captures a handwritten signature on a canvas for approvals and forms.",
      },
      taxonomy: "standard",
    },
  },
  title: "Components/Forms/Signature Pad",
});

export const Default = meta.story({});

export const OnSurface = Default.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const Invalid = meta.story({
  args: {
    invalid: true,
  },
});

export const Disabled = meta.story({
  args: {
    disabled: true,
  },
});

export const Controlled = meta.story({
  render: () => {
    const [paths, setPaths] = useState<string[]>([]);

    return (
      <SignaturePad
        onDraw={(details) => setPaths(details.paths)}
        onDrawEnd={(details) => setPaths(details.paths)}
        paths={paths}
      />
    );
  },
});

export const ImagePreview = meta.story({
  render: () => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    return (
      <Field className="flex flex-col gap-2">
        <SignaturePad
          onDrawEnd={(details) => details.getDataUrl("image/png").then((url) => setImageUrl(url))}
        />
        <Field.Description>Image preview</Field.Description>
        <div className="relative h-40 w-full rounded-lg border bg-muted">
          {imageUrl && (
            <img
              alt="Your signature as captured from the pad above"
              className="size-full dark:invert"
              src={imageUrl}
              style={{
                height: "100%",
                inset: 0,
                objectFit: "cover",
                position: "absolute",
                width: "100%",
              }}
            />
          )}
        </div>
      </Field>
    );
  },
});
