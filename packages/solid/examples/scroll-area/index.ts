import { stripTsxExample } from "@pisagor/utils";
import both_directionsRaw from "./both-directions.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import horizontalRaw from "./horizontal.tsx?raw";
import nestedRaw from "./nested.tsx?raw";
import scroll_fadeRaw from "./scroll-fade.tsx?raw";

export const imports = `import { ScrollArea } from "@pisagor/solid";`;

export const sources = {
  BothDirections: stripTsxExample(both_directionsRaw),
  Default: stripTsxExample(defaultRaw),
  Horizontal: stripTsxExample(horizontalRaw),
  Nested: stripTsxExample(nestedRaw),
  ScrollFade: stripTsxExample(scroll_fadeRaw),
} as const;

export * from "./both-directions";
export * from "./default";
export * from "./horizontal";
export * from "./nested";
export * from "./scroll-fade";
