import { stripTsxExample } from "@pisagor/utils";
import compoundRaw from "./compound.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import multipleRaw from "./multiple.tsx?raw";
import non_collapsibleRaw from "./non-collapsible.tsx?raw";
import with_cardRaw from "./with-card.tsx?raw";

export const imports = `import { Accordion } from "@pisagor/solid";`;

export const sources = {
  Compound: stripTsxExample(compoundRaw),
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Multiple: stripTsxExample(multipleRaw),
  NonCollapsible: stripTsxExample(non_collapsibleRaw),
  WithCard: stripTsxExample(with_cardRaw),
} as const;

export * from "./compound";
export * from "./controlled";
export * from "./default";
export * from "./disabled";
export * from "./multiple";
export * from "./non-collapsible";
export * from "./with-card";
