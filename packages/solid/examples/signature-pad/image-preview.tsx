/** @jsxImportSource solid-js */

import { Field, SignaturePad } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function ImagePreview() {
  const [imageUrl, setImageUrl] = createSignal<string | null>(null);

  return (
    <Field class="flex flex-col gap-2">
      <SignaturePad
        onDrawEnd={(details) =>
          details.getDataUrl("image/png").then((url) => setImageUrl(url))
        }
      />
      <Field.Description>Image preview</Field.Description>
      <div class="relative h-40 w-full rounded-lg border bg-muted">
        {imageUrl() && (
          <img
            alt="Your signature as captured from the pad above"
            class="size-full dark:invert"
            src={imageUrl()}
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
