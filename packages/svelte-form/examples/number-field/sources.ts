import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";

export const imports = `import { NumberField } from "@pisagor/svelte-form";`;

export const sources = {
  Default: defaultRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
} as const;
