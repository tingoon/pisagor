import defaultRaw from "./default.tsx?raw";
import inline_navigationRaw from "./inline-navigation.tsx?raw";
import listRaw from "./list.tsx?raw";
import verticalRaw from "./vertical.tsx?raw";

export const imports = `import { Separator } from "@pisagor/react";`;

export const sources = {
  Default: defaultRaw,
  InlineNavigation: inline_navigationRaw,
  List: listRaw,
  Vertical: verticalRaw,
} as const;

export * from "./default";
export * from "./inline-navigation";
export * from "./list";
export * from "./vertical";
