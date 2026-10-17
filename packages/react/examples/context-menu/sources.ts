import { CheckboxesSource as Checkboxes } from "./checkboxes";
import { DefaultSource as Default } from "./default";

export const imports = `import { ContextMenu } from "@pisagor/react";`;

export const sources = {
  Checkboxes,
  Default,
} as const;
