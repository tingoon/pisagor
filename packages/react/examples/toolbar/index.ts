import compoundRaw from "./compound.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import wrapped_actionsRaw from "./wrapped-actions.tsx?raw";

export const imports = `import { Toolbar } from "@pisagor/react";`;

export const sources = {
  Compound: compoundRaw,
  Default: defaultRaw,
  WrappedActions: wrapped_actionsRaw,
} as const;

export * from "./compound";
export * from "./default";
export * from "./wrapped-actions";
