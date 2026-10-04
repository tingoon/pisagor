import autohighlightRaw from "./autohighlight.svelte?raw";
import compoundRaw from "./compound.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import groupRaw from "./group.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import multipleRaw from "./multiple.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_clear_buttonRaw from "./with-clear-button.svelte?raw";
import with_scrollRaw from "./with-scroll.svelte?raw";
import with_start_iconRaw from "./with-start-icon.svelte?raw";

export const imports = `import { Combobox } from "@pisagor/svelte";`;

export const sources = {
  Autohighlight: autohighlightRaw,
  Compound: compoundRaw,
  Controlled: controlledRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Group: groupRaw,
  Invalid: invalidRaw,
  Multiple: multipleRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithClearButton: with_clear_buttonRaw,
  WithScroll: with_scrollRaw,
  WithStartIcon: with_start_iconRaw,
} as const;

export { default as Autohighlight } from "./autohighlight.svelte";
export { default as Compound } from "./compound.svelte";
export { default as Controlled } from "./controlled.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Group } from "./group.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as Multiple } from "./multiple.svelte";
export { default as Sizes } from "./sizes.svelte";
export { default as Variants } from "./variants.svelte";
export { default as WithClearButton } from "./with-clear-button.svelte";
export { default as WithScroll } from "./with-scroll.svelte";
export { default as WithStartIcon } from "./with-start-icon.svelte";
