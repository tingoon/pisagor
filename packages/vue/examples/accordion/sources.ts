import Compound from "./compound.vue?raw";
import Controlled from "./controlled.vue?raw";
import Default from "./default.vue?raw";
import Disabled from "./disabled.vue?raw";
import Multiple from "./multiple.vue?raw";
import NonCollapsible from "./non-collapsible.vue?raw";
import Sizes from "./sizes.vue?raw";
import WithCard from "./with-card.vue?raw";

export const imports = `import { Accordion } from "@pisagor/vue";`;

export const sources = {
  Compound,
  Controlled,
  Default,
  Disabled,
  Multiple,
  NonCollapsible,
  Sizes,
  WithCard,
} as const;
