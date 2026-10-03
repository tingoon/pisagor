import { stripTsxExample } from "@pisagor/utils";
import compoundRaw from "./compound.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import wrapped_actionsRaw from "./wrapped-actions.tsx?raw";

export const imports = `import { Toolbar } from "@pisagor/react/toolbar";`;

export const sources = {
  Compound: stripTsxExample(compoundRaw),
  Default: stripTsxExample(defaultRaw),
  WrappedActions: stripTsxExample(wrapped_actionsRaw),
} as const;

export { Compound } from "./compound";
export { Default } from "./default";
export { WrappedActions } from "./wrapped-actions";
