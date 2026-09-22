import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import kbd_groupRaw from "./kbd-group.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_buttonRaw from "./with-button.tsx?raw";
import with_tooltipRaw from "./with-tooltip.tsx?raw";

export const imports = `import { Kbd } from "@pisagor/react/kbd";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  KbdGroup: stripTsxExample(kbd_groupRaw),
  Variants: stripTsxExample(variantsRaw),
  WithButton: stripTsxExample(with_buttonRaw),
  WithTooltip: stripTsxExample(with_tooltipRaw),
} as const;

export { Default } from "./default";
export { KbdGroup } from "./kbd-group";
export { Variants } from "./variants";
export { WithButton } from "./with-button";
export { WithTooltip } from "./with-tooltip";
