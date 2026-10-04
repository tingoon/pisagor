import { stripSvelteExample } from "@pisagor/utils";
import defaultRaw from "./default.svelte?raw";
import kbd_groupRaw from "./kbd-group.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_buttonRaw from "./with-button.svelte?raw";
import with_tooltipRaw from "./with-tooltip.svelte?raw";

export const imports = `import { Kbd } from "@pisagor/svelte";`;

export const sources = {
  Default: stripSvelteExample(defaultRaw),
  KbdGroup: stripSvelteExample(kbd_groupRaw),
  Variants: stripSvelteExample(variantsRaw),
  WithButton: stripSvelteExample(with_buttonRaw),
  WithTooltip: stripSvelteExample(with_tooltipRaw),
} as const;

export { default as Default } from "./default.svelte";
export { default as KbdGroup } from "./kbd-group.svelte";
export { default as Variants } from "./variants.svelte";
export { default as WithButton } from "./with-button.svelte";
export { default as WithTooltip } from "./with-tooltip.svelte";
