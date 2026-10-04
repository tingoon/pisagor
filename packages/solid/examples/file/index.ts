import compoundRaw from "./compound.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import with_actionsRaw from "./with-actions.tsx?raw";

export const imports = `import { File } from "@pisagor/solid";`;

export const sources = {
  Compound: compoundRaw,
  Default: defaultRaw,
  WithActions: with_actionsRaw,
} as const;

export * from "./compound";
export * from "./default";
export * from "./with-actions";
