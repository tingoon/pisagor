import defaultRaw from "./default.svelte?raw";
import separated_panelsRaw from "./separated-panels.svelte?raw";
import with_form_controlsRaw from "./with-form-controls.svelte?raw";

export const imports = `import { Frame } from "@pisagor/svelte";`;

export const sources = {
  Default: defaultRaw,
  SeparatedPanels: separated_panelsRaw,
  WithFormControls: with_form_controlsRaw,
} as const;

export { default as Default } from "./default.svelte";
export { default as SeparatedPanels } from "./separated-panels.svelte";
export { default as WithFormControls } from "./with-form-controls.svelte";
