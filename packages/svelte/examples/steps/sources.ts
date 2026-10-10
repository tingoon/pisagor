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
