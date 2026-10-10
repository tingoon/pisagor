import defaultRaw from "./default.tsx?raw";
import portraitRaw from "./portrait.tsx?raw";
import responsiveRaw from "./responsive.tsx?raw";
import squareRaw from "./square.tsx?raw";
import videoRaw from "./video.tsx?raw";

export const imports = `import { AspectRatio } from "@pisagor/react";`;

export const sources = {
  Default: defaultRaw,
  Portrait: portraitRaw,
  Responsive: responsiveRaw,
  Square: squareRaw,
  Video: videoRaw,
} as const;
