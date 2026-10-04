import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import descriptionRaw from "./description.svelte?raw";
import iconRaw from "./icon.svelte?raw";
import loadingRaw from "./loading.svelte?raw";
import titleRaw from "./title.svelte?raw";
import verticalRaw from "./vertical.svelte?raw";

export const imports = `import { Steps } from "@pisagor/svelte";`;

export const sources = {
  Controlled: controlledRaw,
  Default: defaultRaw,
  Description: descriptionRaw,
  Icon: iconRaw,
  Loading: loadingRaw,
  Title: titleRaw,
  Vertical: verticalRaw,
} as const;

export { default as Controlled } from "./controlled.svelte";
export { default as Default } from "./default.svelte";
export { default as Description } from "./description.svelte";
export { default as Icon } from "./icon.svelte";
export { default as Loading } from "./loading.svelte";
export { default as Title } from "./title.svelte";
export { default as Vertical } from "./vertical.svelte";
