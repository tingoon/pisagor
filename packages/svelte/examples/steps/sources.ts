import Controlled from "./controlled.svelte?raw";
import Default from "./default.svelte?raw";
import Description from "./description.svelte?raw";
import Icon from "./icon.svelte?raw";
import Loading from "./loading.svelte?raw";
import Title from "./title.svelte?raw";
import Vertical from "./vertical.svelte?raw";

export const imports = `import { Steps } from "@pisagor/svelte";`;

export const sources = {
  Controlled,
  Default,
  Description,
  Icon,
  Loading,
  Title,
  Vertical,
} as const;
