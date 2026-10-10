import defaultRaw from "./default.svelte?raw";

export const imports = `import { useAppForm } from "@pisagor/svelte-form/tanstack";`;

export const sources = {
  Default: defaultRaw,
} as const;
