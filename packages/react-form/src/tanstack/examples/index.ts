import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";

export const imports = `import { useAppForm } from "@pisagor/react-form/tanstack";`;

export const sources = { Default: stripTsxExample(defaultRaw) } as const;

export { Default } from "./default";
