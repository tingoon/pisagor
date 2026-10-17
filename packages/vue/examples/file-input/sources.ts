import Accept from "./accept.vue?raw";
import Disabled from "./disabled.vue?raw";
import Invalid from "./invalid.vue?raw";
import Multiple from "./multiple.vue?raw";
import OnFilesChange from "./on-files-change.vue?raw";
import Sizes from "./sizes.vue?raw";
import Variants from "./variants.vue?raw";

export const imports = `import { FileInput } from "@pisagor/vue";`;

export const sources = {
  Accept,
  Disabled,
  Invalid,
  Multiple,
  OnFilesChange,
  Sizes,
  Variants,
} as const;
