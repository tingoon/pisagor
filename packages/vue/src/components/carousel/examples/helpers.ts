export function numberedSlides(count: number) {
  return Array.from({ length: count }, (_, index) => ({
    content: `Slide ${index + 1}`,
    key: `slide-${index + 1}`,
  }));
}

export function imageSources() {
  return [
    { alt: "Slide 1", src: "https://picsum.photos/seed/pisagor-1/800/450" },
    { alt: "Slide 2", src: "https://picsum.photos/seed/pisagor-2/800/450" },
    { alt: "Slide 3", src: "https://picsum.photos/seed/pisagor-3/800/450" },
    { alt: "Slide 4", src: "https://picsum.photos/seed/pisagor-4/800/450" },
  ];
}
