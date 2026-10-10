import acceptRaw from "./accept.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import multipleRaw from "./multiple.vue?raw";
import on_files_changeRaw from "./on-files-change.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import variantsRaw from "./variants.vue?raw";

export const imports = `import { FileInput } from "@pisagor/vue";`;

export const sources = {
  Accept: acceptRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  Multiple: multipleRaw,
  OnFilesChange: on_files_changeRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
} as const;
