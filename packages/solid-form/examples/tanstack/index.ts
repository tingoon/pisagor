import defaultRaw from "./default.tsx?raw";

export const imports = `import { useAppForm } from "@pisagor/solid-form/tanstack";`;

export const sources = { Default: defaultRaw } as const;

export * from "./default";
