import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.vue?raw";
import portraitRaw from "./portrait.vue?raw";
import responsiveRaw from "./responsive.vue?raw";
import squareRaw from "./square.vue?raw";
import videoRaw from "./video.vue?raw";

export const imports = `import { AspectRatio } from "@pisagor/vue/aspect-ratio";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
  Portrait: stripVueExample(portraitRaw),
  Responsive: stripVueExample(responsiveRaw),
  Square: stripVueExample(squareRaw),
  Video: stripVueExample(videoRaw),
} as const;

export { default as Default } from "./default.vue";
export { default as Portrait } from "./portrait.vue";
export { default as Responsive } from "./responsive.vue";
export { default as Square } from "./square.vue";
export { default as Video } from "./video.vue";
