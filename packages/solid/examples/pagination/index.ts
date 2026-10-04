import { stripTsxExample } from "@pisagor/utils";
import controlledRaw from "./controlled.tsx?raw";
import custom_compositionRaw from "./custom-composition.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import linksRaw from "./links.tsx?raw";
import page_rangeRaw from "./page-range.tsx?raw";

export const imports = `import { Pagination } from "@pisagor/solid";`;

export const sources = {
  Controlled: stripTsxExample(controlledRaw),
  CustomComposition: stripTsxExample(custom_compositionRaw),
  Default: stripTsxExample(defaultRaw),
  Links: stripTsxExample(linksRaw),
  PageRange: stripTsxExample(page_rangeRaw),
} as const;

export * from "./controlled";
export * from "./custom-composition";
export * from "./default";
export * from "./links";
export * from "./page-range";
