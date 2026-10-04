import { stripSvelteExample } from "@pisagor/utils";
import controlled_positionRaw from "./controlled-position.svelte?raw";
import controlled_sizeRaw from "./controlled-size.svelte?raw";
import custom_spacingRaw from "./custom-spacing.svelte?raw";
import defaultRaw from "./default.svelte?raw";

export const imports = `import { FloatingPanel } from "@pisagor/svelte/floating-panel";`;

export const sources = {
  ControlledPosition: stripSvelteExample(controlled_positionRaw),
  ControlledSize: stripSvelteExample(controlled_sizeRaw),
  CustomSpacing: stripSvelteExample(custom_spacingRaw),
  Default: stripSvelteExample(defaultRaw),
} as const;

export { default as ControlledPosition } from "./controlled-position.svelte";
export { default as ControlledSize } from "./controlled-size.svelte";
export { default as CustomSpacing } from "./custom-spacing.svelte";
export { default as Default } from "./default.svelte";
