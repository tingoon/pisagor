import Controlled from "./controlled.vue?raw";
import Default from "./default.vue?raw";
import Description from "./description.vue?raw";
import Icon from "./icon.vue?raw";
import Loading from "./loading.vue?raw";
import Title from "./title.vue?raw";
import Vertical from "./vertical.vue?raw";

export const imports = `import { Steps } from "@pisagor/vue";`;

export const sources = {
  Controlled,
  Default,
  Description,
  Icon,
  Loading,
  Title,
  Vertical,
} as const;
