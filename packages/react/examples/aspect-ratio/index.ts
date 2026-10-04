import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import portraitRaw from "./portrait.tsx?raw";
import responsiveRaw from "./responsive.tsx?raw";
import squareRaw from "./square.tsx?raw";
import videoRaw from "./video.tsx?raw";

export const imports = `import { AspectRatio } from "@pisagor/react";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  Portrait: stripTsxExample(portraitRaw),
  Responsive: stripTsxExample(responsiveRaw),
  Square: stripTsxExample(squareRaw),
  Video: stripTsxExample(videoRaw),
} as const;

export * from "./default";
export * from "./portrait";
export * from "./responsive";
export * from "./square";
export * from "./video";
