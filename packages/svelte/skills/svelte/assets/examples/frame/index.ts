import { stripSvelteExample } from "@pisagor/utils";
import defaultRaw from "./default.svelte?raw";
import separated_panelsRaw from "./separated-panels.svelte?raw";
import with_form_controlsRaw from "./with-form-controls.svelte?raw";

export const imports = `import { Frame } from "@pisagor/svelte/frame";`;

export const sources = {
  Default: stripSvelteExample(defaultRaw),
  SeparatedPanels: stripSvelteExample(separated_panelsRaw),
  WithFormControls: stripSvelteExample(with_form_controlsRaw),
} as const;

export { default as Default } from "./default.svelte";
export { default as SeparatedPanels } from "./separated-panels.svelte";
export { default as WithFormControls } from "./with-form-controls.svelte";
