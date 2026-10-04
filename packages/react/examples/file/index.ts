import { stripTsxExample } from "@pisagor/utils";
import compoundRaw from "./compound.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import with_actionsRaw from "./with-actions.tsx?raw";

export const imports = `import { File } from "@pisagor/react";`;

export const sources = {
  Compound: stripTsxExample(compoundRaw),
  Default: stripTsxExample(defaultRaw),
  WithActions: stripTsxExample(with_actionsRaw),
} as const;

export * from "./compound";
export * from "./default";
export * from "./with-actions";
