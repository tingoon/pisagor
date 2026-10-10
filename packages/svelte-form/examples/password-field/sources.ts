import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import with_label_accessoryRaw from "./with-label-accessory.svelte?raw";

export const imports = `import { PasswordField } from "@pisagor/svelte-form";`;

export const sources = {
  Default: defaultRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  WithLabelAccessory: with_label_accessoryRaw,
} as const;
