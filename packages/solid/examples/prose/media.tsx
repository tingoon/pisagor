/** @jsxImportSource solid-js */
import { Prose } from "@pisagor/solid/prose";

export function Media() {
  return (
    <Prose>
      <figure>
        <img
          alt="Placeholder"
          height={200}
          src="/images/placeholder.svg"
          width={200}
        />
        <figcaption>A description of the image.</figcaption>
      </figure>
    </Prose>
  );
}
