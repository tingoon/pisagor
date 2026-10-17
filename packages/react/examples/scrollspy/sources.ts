import { DefaultSource as Default } from "./default";
import { HorizontalSource as Horizontal } from "./horizontal";

export const imports = `import { Scrollspy } from "@pisagor/react";`;

export const sources = {
  Default,
  Horizontal,
} as const;
