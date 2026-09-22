import { stripTsxExample } from "@pisagor/utils";
import autohighlightRaw from "./autohighlight.tsx?raw";
import compoundRaw from "./compound.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import groupRaw from "./group.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import multipleRaw from "./multiple.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_clear_buttonRaw from "./with-clear-button.tsx?raw";
import with_scrollRaw from "./with-scroll.tsx?raw";
import with_start_iconRaw from "./with-start-icon.tsx?raw";

export const imports = `import { Combobox } from "@pisagor/react/combobox";`;

export const sources = {
  Autohighlight: stripTsxExample(autohighlightRaw),
  Compound: stripTsxExample(compoundRaw),
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Group: stripTsxExample(groupRaw),
  Invalid: stripTsxExample(invalidRaw),
  Multiple: stripTsxExample(multipleRaw),
  Sizes: stripTsxExample(sizesRaw),
  Variants: stripTsxExample(variantsRaw),
  WithClearButton: stripTsxExample(with_clear_buttonRaw),
  WithScroll: stripTsxExample(with_scrollRaw),
  WithStartIcon: stripTsxExample(with_start_iconRaw),
} as const;

export { Autohighlight } from "./autohighlight";
export { Compound } from "./compound";
export { Controlled } from "./controlled";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { Group } from "./group";
export { Invalid } from "./invalid";
export { Multiple } from "./multiple";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
export { WithClearButton } from "./with-clear-button";
export { WithScroll } from "./with-scroll";
export { WithStartIcon } from "./with-start-icon";
