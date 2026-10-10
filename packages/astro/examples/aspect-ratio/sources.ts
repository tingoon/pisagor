import defaultRaw from "./default.astro?raw";
import portraitRaw from "./portrait.astro?raw";
import responsiveRaw from "./responsive.astro?raw";
import squareRaw from "./square.astro?raw";
import videoRaw from "./video.astro?raw";

export const imports = `---
import { AspectRatio } from "@pisagor/astro";
---`;

export const sources = {
  Default: defaultRaw,
  Portrait: portraitRaw,
  Responsive: responsiveRaw,
  Square: squareRaw,
  Video: videoRaw,
} as const;
