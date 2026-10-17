import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Invalid from "./invalid.svelte?raw";

export const imports = `import { RichTextEditorField } from "@pisagor/svelte-form";`;

export const sources = {
  Default,
  Disabled,
  Invalid,
} as const;
