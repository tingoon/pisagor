import avatar_groupRaw from "./avatar-group.svelte?raw";
import compoundRaw from "./compound.svelte?raw";
import countRaw from "./count.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import fallbacksRaw from "./fallbacks.svelte?raw";
import shapesRaw from "./shapes.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";

export const imports = `import { Avatar } from "@pisagor/svelte";`;

export const sources = {
  AvatarGroup: avatar_groupRaw,
  Compound: compoundRaw,
  Count: countRaw,
  Default: defaultRaw,
  Fallbacks: fallbacksRaw,
  Shapes: shapesRaw,
  Sizes: sizesRaw,
} as const;

export { default as AvatarGroup } from "./avatar-group.svelte";
export { default as Compound } from "./compound.svelte";
export { default as Count } from "./count.svelte";
export { default as Default } from "./default.svelte";
export { default as Fallbacks } from "./fallbacks.svelte";
export { default as Shapes } from "./shapes.svelte";
export { default as Sizes } from "./sizes.svelte";
