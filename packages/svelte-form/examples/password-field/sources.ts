import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import WithLabelAccessory from "./with-label-accessory.svelte?raw";

export const imports = `import { PasswordField } from "@pisagor/svelte-form";`;

export const sources = {
  Default,
  Disabled,
  Invalid,
  WithLabelAccessory,
} as const;
