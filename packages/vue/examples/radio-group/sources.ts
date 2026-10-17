import Compound from "./compound.vue?raw";
import Controlled from "./controlled.vue?raw";
import Default from "./default.vue?raw";
import Disabled from "./disabled.vue?raw";
import Invalid from "./invalid.vue?raw";
import Variants from "./variants.vue?raw";
import WithDescription from "./with-description.vue?raw";

export const imports = `import { RadioGroup } from "@pisagor/vue";`;

export const sources = {
  Compound,
  Controlled,
  Default,
  Disabled,
  Invalid,
  Variants,
  WithDescription,
} as const;
