import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { InvalidSource as Invalid } from "./invalid";
import { WithLabelAccessorySource as WithLabelAccessory } from "./with-label-accessory";

export const imports = `import { PasswordField } from "@pisagor/react-form";`;

export const sources = {
  Default,
  Disabled,
  Invalid,
  WithLabelAccessory,
} as const;
