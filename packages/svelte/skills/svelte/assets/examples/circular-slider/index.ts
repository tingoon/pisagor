import { stripSvelteExample } from "@pisagor/utils";
import controlledRaw from "./controlled.svelte?raw";
import custom_markersRaw from "./custom-markers.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import stepRaw from "./step.svelte?raw";
import thicknessRaw from "./thickness.svelte?raw";
import with_markersRaw from "./with-markers.svelte?raw";
import with_valueRaw from "./with-value.svelte?raw";

export const imports = `import { CircularSlider } from "@pisagor/svelte/circular-slider";`;

export const sources = {
  Controlled: stripSvelteExample(controlledRaw),
  CustomMarkers: stripSvelteExample(custom_markersRaw),
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  Sizes: stripSvelteExample(sizesRaw),
  Step: stripSvelteExample(stepRaw),
  Thickness: stripSvelteExample(thicknessRaw),
  WithMarkers: stripSvelteExample(with_markersRaw),
  WithValue: stripSvelteExample(with_valueRaw),
} as const;

export { default as Controlled } from "./controlled.svelte";
export { default as CustomMarkers } from "./custom-markers.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Sizes } from "./sizes.svelte";
export { default as Step } from "./step.svelte";
export { default as Thickness } from "./thickness.svelte";
export { default as WithMarkers } from "./with-markers.svelte";
export { default as WithValue } from "./with-value.svelte";
