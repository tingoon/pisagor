import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import portraitRaw from "./portrait.tsx?raw";
import responsiveRaw from "./responsive.tsx?raw";
import squareRaw from "./square.tsx?raw";
import videoRaw from "./video.tsx?raw";

export const imports = `import { AspectRatio } from "@pisagor/react/aspect-ratio";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  Portrait: stripTsxExample(portraitRaw),
  Responsive: stripTsxExample(responsiveRaw),
  Square: stripTsxExample(squareRaw),
  Video: stripTsxExample(videoRaw),
} as const;

export { Default } from "./default";
export { Portrait } from "./portrait";
export { Responsive } from "./responsive";
export { Square } from "./square";
export { Video } from "./video";
