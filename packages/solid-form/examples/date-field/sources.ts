import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";

export const imports = `import { DateField } from "@pisagor/solid-form";`;

export const sources = {
  Default: defaultRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
} as const;
