import { stripTsxExample } from "@pisagor/utils";
import compoundRaw from "./compound.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import with_actionsRaw from "./with-actions.tsx?raw";

export const imports = `import { File } from "@pisagor/react/file";`;

export const sources = {
  Compound: stripTsxExample(compoundRaw),
  Default: stripTsxExample(defaultRaw),
  WithActions: stripTsxExample(with_actionsRaw),
} as const;

export { Compound } from "./compound";
export { Default } from "./default";
export { WithActions } from "./with-actions";
