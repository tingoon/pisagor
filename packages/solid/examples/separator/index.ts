import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import inline_navigationRaw from "./inline-navigation.tsx?raw";
import listRaw from "./list.tsx?raw";
import verticalRaw from "./vertical.tsx?raw";

export const imports = `import { Separator } from "@pisagor/solid";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  InlineNavigation: stripTsxExample(inline_navigationRaw),
  List: stripTsxExample(listRaw),
  Vertical: stripTsxExample(verticalRaw),
} as const;

export * from "./default";
export * from "./inline-navigation";
export * from "./list";
export * from "./vertical";
