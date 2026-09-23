import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import inline_navigationRaw from "./inline-navigation.tsx?raw";
import listRaw from "./list.tsx?raw";
import verticalRaw from "./vertical.tsx?raw";

export const imports = `import { Separator } from "@pisagor/react/separator";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  InlineNavigation: stripTsxExample(inline_navigationRaw),
  List: stripTsxExample(listRaw),
  Vertical: stripTsxExample(verticalRaw),
} as const;

export { Default } from "./default";
export { InlineNavigation } from "./inline-navigation";
export { List } from "./list";
export { Vertical } from "./vertical";
