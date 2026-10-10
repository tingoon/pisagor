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
