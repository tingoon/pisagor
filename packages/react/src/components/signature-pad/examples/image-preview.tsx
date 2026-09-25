import { Field } from "@pisagor/react";
import { useState } from "react";
import { SignaturePad } from "..";
export function ImagePreview() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <Field className="flex flex-col gap-2">
      <SignaturePad
        onDrawEnd={(details) =>
          details.getDataUrl("image/png").then((url) => setImageUrl(url))
        }
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
}
