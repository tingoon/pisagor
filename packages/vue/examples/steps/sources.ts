import controlledRaw from "./controlled.vue?raw";
import defaultRaw from "./default.vue?raw";
import descriptionRaw from "./description.vue?raw";
import iconRaw from "./icon.vue?raw";
import loadingRaw from "./loading.vue?raw";
import titleRaw from "./title.vue?raw";
import verticalRaw from "./vertical.vue?raw";

export const imports = `import { Steps } from "@pisagor/vue";`;

export const sources = {
  Controlled: controlledRaw,
  Default: defaultRaw,
  Description: descriptionRaw,
  Icon: iconRaw,
  Loading: loadingRaw,
  Title: titleRaw,
  Vertical: verticalRaw,
} as const;
