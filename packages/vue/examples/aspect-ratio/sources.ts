import defaultRaw from "./default.vue?raw";
import portraitRaw from "./portrait.vue?raw";
import responsiveRaw from "./responsive.vue?raw";
import squareRaw from "./square.vue?raw";
import videoRaw from "./video.vue?raw";

export const imports = `import { AspectRatio } from "@pisagor/vue";`;

export const sources = {
  Default: defaultRaw,
  Portrait: portraitRaw,
  Responsive: responsiveRaw,
  Square: squareRaw,
  Video: videoRaw,
} as const;
