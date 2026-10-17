import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { InvalidSource as Invalid } from "./invalid";

export const imports = `import { PhoneField } from "@pisagor/solid-form";`;

export const sources = {
  Default,
  Disabled,
  Invalid,
} as const;
