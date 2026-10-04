import { stripSvelteExample } from "@pisagor/utils";
import collapsibleRaw from "./collapsible.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import edge_handleRaw from "./edge-handle.svelte?raw";
import handleRaw from "./handle.svelte?raw";
import min_maxRaw from "./min-max.svelte?raw";
import multiple_panelsRaw from "./multiple-panels.svelte?raw";
import orientation_horizontalRaw from "./orientation-horizontal.svelte?raw";
import orientation_verticalRaw from "./orientation-vertical.svelte?raw";

export const imports = `import { Resizable } from "@pisagor/svelte/resizable";`;

export const sources = {
  Collapsible: stripSvelteExample(collapsibleRaw),
  Default: stripSvelteExample(defaultRaw),
  EdgeHandle: stripSvelteExample(edge_handleRaw),
  Handle: stripSvelteExample(handleRaw),
  MinMax: stripSvelteExample(min_maxRaw),
  MultiplePanels: stripSvelteExample(multiple_panelsRaw),
  OrientationHorizontal: stripSvelteExample(orientation_horizontalRaw),
  OrientationVertical: stripSvelteExample(orientation_verticalRaw),
} as const;

export { default as Collapsible } from "./collapsible.svelte";
export { default as Default } from "./default.svelte";
export { default as EdgeHandle } from "./edge-handle.svelte";
export { default as Handle } from "./handle.svelte";
export { default as MinMax } from "./min-max.svelte";
export { default as MultiplePanels } from "./multiple-panels.svelte";
export { default as OrientationHorizontal } from "./orientation-horizontal.svelte";
export { default as OrientationVertical } from "./orientation-vertical.svelte";
