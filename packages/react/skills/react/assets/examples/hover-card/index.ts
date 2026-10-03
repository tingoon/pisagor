import { stripTsxExample } from "@pisagor/utils";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import placementsRaw from "./placements.tsx?raw";
import triggers_delaysRaw from "./triggers-delays.tsx?raw";

export const imports = `import { HoverCard } from "@pisagor/react/hover-card";`;

export const sources = {
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Placements: stripTsxExample(placementsRaw),
  TriggersDelays: stripTsxExample(triggers_delaysRaw),
} as const;

export { Controlled } from "./controlled";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { Placements } from "./placements";
export { TriggersDelays } from "./triggers-delays";
