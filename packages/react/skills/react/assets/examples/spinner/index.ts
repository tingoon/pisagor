import { stripTsxExample } from "@pisagor/utils";
import sizesRaw from "./sizes.tsx?raw";

export const imports = `import { Spinner } from "@pisagor/react/spinner";`;

export const sources = {
  Sizes: stripTsxExample(sizesRaw),
} as const;

export { Sizes } from "./sizes";
