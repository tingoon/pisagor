import { stripSvelteExample } from "@pisagor/utils";
import autofillRaw from "./autofill.svelte?raw";
import compoundRaw from "./compound.svelte?raw";
import custom_speedRaw from "./custom-speed.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import fadeRaw from "./fade.svelte?raw";
import orientation_horizontalRaw from "./orientation-horizontal.svelte?raw";
import orientation_verticalRaw from "./orientation-vertical.svelte?raw";
import pause_on_hoverRaw from "./pause-on-hover.svelte?raw";
import reverseRaw from "./reverse.svelte?raw";
import spacingRaw from "./spacing.svelte?raw";

export const imports = `import { Marquee } from "@pisagor/svelte/marquee";`;

export const sources = {
  Autofill: stripSvelteExample(autofillRaw),
  Compound: stripSvelteExample(compoundRaw),
  CustomSpeed: stripSvelteExample(custom_speedRaw),
  Default: stripSvelteExample(defaultRaw),
  Fade: stripSvelteExample(fadeRaw),
  OrientationHorizontal: stripSvelteExample(orientation_horizontalRaw),
  OrientationVertical: stripSvelteExample(orientation_verticalRaw),
  PauseOnHover: stripSvelteExample(pause_on_hoverRaw),
  Reverse: stripSvelteExample(reverseRaw),
  Spacing: stripSvelteExample(spacingRaw),
} as const;

export { default as Autofill } from "./autofill.svelte";
export { default as Compound } from "./compound.svelte";
export { default as CustomSpeed } from "./custom-speed.svelte";
export { default as Default } from "./default.svelte";
export { default as Fade } from "./fade.svelte";
export { default as OrientationHorizontal } from "./orientation-horizontal.svelte";
export { default as OrientationVertical } from "./orientation-vertical.svelte";
export { default as PauseOnHover } from "./pause-on-hover.svelte";
export { default as Reverse } from "./reverse.svelte";
export { default as Spacing } from "./spacing.svelte";
