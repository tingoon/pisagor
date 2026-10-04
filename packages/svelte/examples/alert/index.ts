import compoundRaw from "./compound.svelte?raw";
import custom_colorRaw from "./custom-color.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_actionRaw from "./with-action.svelte?raw";
import with_iconRaw from "./with-icon.svelte?raw";

export const imports = `import { Alert } from "@pisagor/svelte";`;

export const sources = {
  Compound: compoundRaw,
  CustomColor: custom_colorRaw,
  Default: defaultRaw,
  Variants: variantsRaw,
  WithAction: with_actionRaw,
  WithIcon: with_iconRaw,
} as const;

export { default as Compound } from "./compound.svelte";
export { default as CustomColor } from "./custom-color.svelte";
export { default as Default } from "./default.svelte";
export { default as Variants } from "./variants.svelte";
export { default as WithAction } from "./with-action.svelte";
export { default as WithIcon } from "./with-icon.svelte";
