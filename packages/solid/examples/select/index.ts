import { stripTsxExample } from "@pisagor/utils";
import compoundRaw from "./compound.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import emptyRaw from "./empty.tsx?raw";
import groupingRaw from "./grouping.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import max_selectionRaw from "./max-selection.tsx?raw";
import multipleRaw from "./multiple.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_scrollRaw from "./with-scroll.tsx?raw";

export const imports = `import { Select } from "@pisagor/solid";`;

export const sources = {
  Compound: stripTsxExample(compoundRaw),
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Empty: stripTsxExample(emptyRaw),
  Grouping: stripTsxExample(groupingRaw),
  Invalid: stripTsxExample(invalidRaw),
  MaxSelection: stripTsxExample(max_selectionRaw),
  Multiple: stripTsxExample(multipleRaw),
  Sizes: stripTsxExample(sizesRaw),
  Variants: stripTsxExample(variantsRaw),
  WithScroll: stripTsxExample(with_scrollRaw),
} as const;

export * from "./compound";
export * from "./controlled";
export * from "./default";
export * from "./disabled";
export * from "./empty";
export * from "./grouping";
export * from "./invalid";
export * from "./max-selection";
export * from "./multiple";
export * from "./sizes";
export * from "./variants";
export * from "./with-scroll";
