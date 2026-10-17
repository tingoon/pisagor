import { CompoundSource as Compound } from "./compound";
import { DefaultSource as Default } from "./default";
import { HorizontalSource as Horizontal } from "./horizontal";

export const imports = `import { Timeline } from "@pisagor/react";`;

export const sources = {
  Compound,
  Default,
  Horizontal,
} as const;
