import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import with_label_accessoryRaw from "./with-label-accessory.tsx?raw";

export const imports = `import { PasswordField } from "@pisagor/solid-form";`;

export const sources = {
  Default: defaultRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  WithLabelAccessory: with_label_accessoryRaw,
} as const;
