import { DefaultSource as Default } from "./default";
import { HorizontalSource as Horizontal } from "./horizontal";

export const imports = `import { Scrollspy } from "@pisagor/solid";`;

export const sources = {
  Default,
  Horizontal,
} as const;
