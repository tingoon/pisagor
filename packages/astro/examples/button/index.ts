import defaultRaw from "./default.astro?raw";
import disabledRaw from "./disabled.astro?raw";
import iconRaw from "./icon.astro?raw";
import loadingRaw from "./loading.astro?raw";
import no_click_effectRaw from "./no-click-effect.astro?raw";
import pillRaw from "./pill.astro?raw";
import sizesRaw from "./sizes.astro?raw";
import variantsRaw from "./variants.astro?raw";
import with_iconRaw from "./with-icon.astro?raw";

export const imports = `---
import { Button } from "@pisagor/astro";
---`;

export const sources = {
  Default: defaultRaw,
  Disabled: disabledRaw,
  Icon: iconRaw,
  Loading: loadingRaw,
  NoClickEffect: no_click_effectRaw,
  Pill: pillRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithIcon: with_iconRaw,
} as const;

export { default as Default } from "./default.astro";
export { default as Disabled } from "./disabled.astro";
export { default as Icon } from "./icon.astro";
export { default as Loading } from "./loading.astro";
export { default as NoClickEffect } from "./no-click-effect.astro";
export { default as Pill } from "./pill.astro";
export { default as Sizes } from "./sizes.astro";
export { default as Variants } from "./variants.astro";
export { default as WithIcon } from "./with-icon.astro";
