import { stripAstroExample } from "@pisagor/utils";
import defaultRaw from "./default.astro?raw";
import portraitRaw from "./portrait.astro?raw";
import responsiveRaw from "./responsive.astro?raw";
import squareRaw from "./square.astro?raw";
import videoRaw from "./video.astro?raw";
import widescreenRaw from "./widescreen.astro?raw";

export const imports = `---
import { AspectRatio } from "@pisagor/astro";
---`;

export const sources = {
  Default: stripAstroExample(defaultRaw),
  Portrait: stripAstroExample(portraitRaw),
  Responsive: stripAstroExample(responsiveRaw),
  Square: stripAstroExample(squareRaw),
  Video: stripAstroExample(videoRaw),
  Widescreen: stripAstroExample(widescreenRaw),
} as const;

export { default as Default } from "./default.astro";
export { default as Portrait } from "./portrait.astro";
export { default as Responsive } from "./responsive.astro";
export { default as Square } from "./square.astro";
export { default as Video } from "./video.astro";
export { default as Widescreen } from "./widescreen.astro";
