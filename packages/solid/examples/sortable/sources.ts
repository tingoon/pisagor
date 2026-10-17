import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { HorizontalSource as Horizontal } from "./horizontal";
import { WithoutHandleSource as WithoutHandle } from "./without-handle";

export const imports = `import { Sortable } from "@pisagor/solid";`;

export const sources = {
  Default,
  Disabled,
  Horizontal,
  WithoutHandle,
} as const;
