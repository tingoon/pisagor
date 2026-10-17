import Default from "./default.svelte?raw";
import Portrait from "./portrait.svelte?raw";
import Responsive from "./responsive.svelte?raw";
import Square from "./square.svelte?raw";
import Video from "./video.svelte?raw";

export const imports = `import { AspectRatio } from "@pisagor/svelte";`;

export const sources = {
  Default,
  Portrait,
  Responsive,
  Square,
  Video,
} as const;
