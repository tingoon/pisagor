import Accept from "./accept.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import Multiple from "./multiple.svelte?raw";
import OnFilesChange from "./on-files-change.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Variants from "./variants.svelte?raw";

export const imports = `import { FileInput } from "@pisagor/svelte";`;

export const sources = {
  Accept,
  Disabled,
  Invalid,
  Multiple,
  OnFilesChange,
  Sizes,
  Variants,
} as const;
