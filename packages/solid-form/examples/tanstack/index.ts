import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";

export const imports = `import { useAppForm } from "@pisagor/solid-form/tanstack";`;

export const sources = { Default: stripTsxExample(defaultRaw) } as const;

export * from "./default";
