import acceptRaw from "./accept.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import multipleRaw from "./multiple.svelte?raw";
import on_files_changeRaw from "./on-files-change.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import variantsRaw from "./variants.svelte?raw";

export const imports = `import { FileInput } from "@pisagor/svelte";`;

export const sources = {
  Accept: acceptRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  Multiple: multipleRaw,
  OnFilesChange: on_files_changeRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
} as const;
