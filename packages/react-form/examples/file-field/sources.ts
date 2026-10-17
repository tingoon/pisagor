import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { InvalidSource as Invalid } from "./invalid";

export const imports = `import { FileField } from "@pisagor/react-form";`;

export const sources = {
  Default,
  Disabled,
  Invalid,
} as const;
