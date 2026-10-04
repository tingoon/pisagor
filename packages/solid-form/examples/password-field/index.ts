import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import with_label_accessoryRaw from "./with-label-accessory.tsx?raw";

export const imports = `import { PasswordField } from "@pisagor/solid-form";`;

export const sources = {
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  WithLabelAccessory: with_label_accessoryRaw,
} as const;

export * from "./disabled";
export * from "./invalid";
export * from "./with-label-accessory";
