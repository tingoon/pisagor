import { stripTsxExample } from "@pisagor/utils";
import custom_styleRaw from "./custom-style.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import multipleRaw from "./multiple.tsx?raw";
import search_queryRaw from "./search-query.tsx?raw";
import squiggleRaw from "./squiggle.tsx?raw";

export const imports = `import { Highlight } from "@pisagor/react/highlight";`;

export const sources = {
  CustomStyle: stripTsxExample(custom_styleRaw),
  Default: stripTsxExample(defaultRaw),
  Multiple: stripTsxExample(multipleRaw),
  SearchQuery: stripTsxExample(search_queryRaw),
  Squiggle: stripTsxExample(squiggleRaw),
} as const;

export { CustomStyle } from "./custom-style";
export { Default } from "./default";
export { Multiple } from "./multiple";
export { SearchQuery } from "./search-query";
export { Squiggle } from "./squiggle";
