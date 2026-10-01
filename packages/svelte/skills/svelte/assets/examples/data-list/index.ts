import { stripSvelteExample } from "@pisagor/utils";
import compoundRaw from "./compound.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import info_tipRaw from "./info-tip.svelte?raw";
import orientation_horizontalRaw from "./orientation-horizontal.svelte?raw";
import orientation_verticalRaw from "./orientation-vertical.svelte?raw";
import separatorRaw from "./separator.svelte?raw";

export const imports = `import { DataList } from "@pisagor/svelte/data-list";`;

export const sources = {
  Compound: stripSvelteExample(compoundRaw),
  Default: stripSvelteExample(defaultRaw),
  InfoTip: stripSvelteExample(info_tipRaw),
  OrientationHorizontal: stripSvelteExample(orientation_horizontalRaw),
  OrientationVertical: stripSvelteExample(orientation_verticalRaw),
  Separator: stripSvelteExample(separatorRaw),
} as const;

export { default as Compound } from "./compound.svelte";
export { default as Default } from "./default.svelte";
export { default as InfoTip } from "./info-tip.svelte";
export { default as OrientationHorizontal } from "./orientation-horizontal.svelte";
export { default as OrientationVertical } from "./orientation-vertical.svelte";
export { default as Separator } from "./separator.svelte";
