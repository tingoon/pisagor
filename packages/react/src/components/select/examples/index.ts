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

export const imports = `import { Select } from "@pisagor/react/select";`;

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

export { Compound } from "./compound";
export { Controlled } from "./controlled";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { Empty } from "./empty";
export { Grouping } from "./grouping";
export { Invalid } from "./invalid";
export { MaxSelection } from "./max-selection";
export { Multiple } from "./multiple";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
export { WithScroll } from "./with-scroll";
