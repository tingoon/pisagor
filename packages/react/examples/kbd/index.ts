import defaultRaw from "./default.tsx?raw";
import kbd_groupRaw from "./kbd-group.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_buttonRaw from "./with-button.tsx?raw";
import with_tooltipRaw from "./with-tooltip.tsx?raw";

export const imports = `import { Kbd } from "@pisagor/react";`;

export const sources = {
  Default: defaultRaw,
  KbdGroup: kbd_groupRaw,
  Variants: variantsRaw,
  WithButton: with_buttonRaw,
  WithTooltip: with_tooltipRaw,
} as const;

export * from "./default";
export * from "./kbd-group";
export * from "./variants";
export * from "./with-button";
export * from "./with-tooltip";
