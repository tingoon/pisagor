import { stripTsxExample } from "@pisagor/utils";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import with_label_accessoryRaw from "./with-label-accessory.tsx?raw";

export const imports = `import { PasswordField } from "@pisagor/react-form";`;

export const sources = {
  Disabled: stripTsxExample(disabledRaw),
  Invalid: stripTsxExample(invalidRaw),
  WithLabelAccessory: stripTsxExample(with_label_accessoryRaw),
} as const;

export { Disabled } from "./disabled";
export { Invalid } from "./invalid";
export { WithLabelAccessory } from "./with-label-accessory";
