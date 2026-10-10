import defaultRaw from "./default.tsx?raw";

export const imports = `import { useAppForm } from "@pisagor/react-form/tanstack";`;

export const sources = { Default: defaultRaw } as const;
