import compoundRaw from "./compound.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import multipleRaw from "./multiple.tsx?raw";
import non_collapsibleRaw from "./non-collapsible.tsx?raw";
import with_cardRaw from "./with-card.tsx?raw";

export const imports = `import { Accordion } from "@pisagor/solid";`;

export const sources = {
  Compound: compoundRaw,
  Controlled: controlledRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Multiple: multipleRaw,
  NonCollapsible: non_collapsibleRaw,
  WithCard: with_cardRaw,
} as const;

export * from "./compound";
export * from "./controlled";
export * from "./default";
export * from "./disabled";
export * from "./multiple";
export * from "./non-collapsible";
export * from "./with-card";
