import { Prose } from "@pisagor/react";

export function Media() {
  return (
    <Prose>
      <figure>
        <img
          alt="Mountain landscape"
          height={250}
          src="https://picsum.photos/seed/pisagor-prose/400/250"
          width={400}
        />
        <figcaption>A description of the image.</figcaption>
      </figure>
    </Prose>
  );
}
