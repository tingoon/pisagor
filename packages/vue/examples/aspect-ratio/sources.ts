import Default from "./default.vue?raw";
import Portrait from "./portrait.vue?raw";
import Responsive from "./responsive.vue?raw";
import Square from "./square.vue?raw";
import Video from "./video.vue?raw";

export const imports = `import { AspectRatio } from "@pisagor/vue";`;

export const sources = {
  Default,
  Portrait,
  Responsive,
  Square,
  Video,
} as const;
