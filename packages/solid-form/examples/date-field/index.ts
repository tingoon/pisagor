import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";

export const imports = `import { DateField } from "@pisagor/solid-form";`;

export const sources = {
  Disabled: disabledRaw,
  Invalid: invalidRaw,
} as const;

export * from "./disabled";
export * from "./invalid";
