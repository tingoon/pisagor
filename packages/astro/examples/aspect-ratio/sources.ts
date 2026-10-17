import Default from "./default.astro?raw";
import Portrait from "./portrait.astro?raw";
import Responsive from "./responsive.astro?raw";
import Square from "./square.astro?raw";
import Video from "./video.astro?raw";

export const imports = `---
import { AspectRatio } from "@pisagor/astro";
---`;

export const sources = {
  Default,
  Portrait,
  Responsive,
  Square,
  Video,
} as const;
