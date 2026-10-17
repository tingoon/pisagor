import { DefaultSource as Default } from "./default";
import { PortraitSource as Portrait } from "./portrait";
import { ResponsiveSource as Responsive } from "./responsive";
import { SquareSource as Square } from "./square";
import { VideoSource as Video } from "./video";

export const imports = `import { AspectRatio } from "@pisagor/solid";`;

export const sources = {
  Default,
  Portrait,
  Responsive,
  Square,
  Video,
} as const;
