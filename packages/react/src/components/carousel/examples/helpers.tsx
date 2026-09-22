import type { ReactNode } from "react";

export function numberedSlides(count: number) {
  return Array.from({ length: count }, (_, index) => ({
    content: `Slide ${index + 1}` as ReactNode,
    key: `slide-${index + 1}`,
  }));
}

export function imageSlides() {
  return [
    {
      content: (
        <img
          alt="Slide 1"
          height={300}
          src="https://picsum.photos/seed/pisagor-1/800/450"
          width={500}
        />
      ),
      key: "img-1",
    },
    {
      content: (
        <img
          alt="Slide 2"
          height={300}
          src="https://picsum.photos/seed/pisagor-2/800/450"
          width={500}
        />
      ),
      key: "img-2",
    },
    {
      content: (
        <img
          alt="Slide 3"
          height={300}
          src="https://picsum.photos/seed/pisagor-3/800/450"
          width={500}
        />
      ),
      key: "img-3",
    },
    {
      content: (
        <img
          alt="Slide 4"
          height={300}
          src="https://picsum.photos/seed/pisagor-4/800/450"
          width={500}
        />
      ),
      key: "img-4",
    },
  ];
}

export function imageSources() {
  return [
    { alt: "Slide 1", src: "https://picsum.photos/seed/pisagor-1/800/450" },
    { alt: "Slide 2", src: "https://picsum.photos/seed/pisagor-2/800/450" },
    { alt: "Slide 3", src: "https://picsum.photos/seed/pisagor-3/800/450" },
    { alt: "Slide 4", src: "https://picsum.photos/seed/pisagor-4/800/450" },
  ];
}
