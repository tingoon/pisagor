import defaultRaw from "./default.svelte?raw";
import portraitRaw from "./portrait.svelte?raw";
import responsiveRaw from "./responsive.svelte?raw";
import squareRaw from "./square.svelte?raw";
import videoRaw from "./video.svelte?raw";

export const imports = `import { AspectRatio } from "@pisagor/svelte";`;

export const sources = {
  Default: defaultRaw,
  Portrait: portraitRaw,
  Responsive: responsiveRaw,
  Square: squareRaw,
  Video: videoRaw,
} as const;

export { default as Default } from "./default.svelte";
export { default as Portrait } from "./portrait.svelte";
export { default as Responsive } from "./responsive.svelte";
export { default as Square } from "./square.svelte";
export { default as Video } from "./video.svelte";
