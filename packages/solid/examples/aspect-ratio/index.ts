import defaultRaw from "./default.tsx?raw";
import portraitRaw from "./portrait.tsx?raw";
import responsiveRaw from "./responsive.tsx?raw";
import squareRaw from "./square.tsx?raw";
import videoRaw from "./video.tsx?raw";

export const imports = `import { AspectRatio } from "@pisagor/solid";`;

export const sources = {
  Default: defaultRaw,
  Portrait: portraitRaw,
  Responsive: responsiveRaw,
  Square: squareRaw,
  Video: videoRaw,
} as const;

export * from "./default";
export * from "./portrait";
export * from "./responsive";
export * from "./square";
export * from "./video";
