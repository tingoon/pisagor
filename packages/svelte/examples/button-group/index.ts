import { stripSvelteExample } from "@pisagor/utils";
import defaultRaw from "./default.svelte?raw";
import nestedRaw from "./nested.svelte?raw";
import orientation_horizontalRaw from "./orientation-horizontal.svelte?raw";
import orientation_verticalRaw from "./orientation-vertical.svelte?raw";
import with_separatorRaw from "./with-separator.svelte?raw";

export const imports = `import { ButtonGroup } from "@pisagor/svelte";`;

export const sources = {
  Default: stripSvelteExample(defaultRaw),
  Nested: stripSvelteExample(nestedRaw),
  OrientationHorizontal: stripSvelteExample(orientation_horizontalRaw),
  OrientationVertical: stripSvelteExample(orientation_verticalRaw),
  WithSeparator: stripSvelteExample(with_separatorRaw),
} as const;

export { default as Default } from "./default.svelte";
export { default as Nested } from "./nested.svelte";
export { default as OrientationHorizontal } from "./orientation-horizontal.svelte";
export { default as OrientationVertical } from "./orientation-vertical.svelte";
export { default as WithSeparator } from "./with-separator.svelte";
