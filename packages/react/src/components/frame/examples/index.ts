import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import separated_panelsRaw from "./separated-panels.tsx?raw";
import with_form_controlsRaw from "./with-form-controls.tsx?raw";

export const imports = `import { Frame } from "@pisagor/react/frame";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  SeparatedPanels: stripTsxExample(separated_panelsRaw),
  WithFormControls: stripTsxExample(with_form_controlsRaw),
} as const;

export { Default } from "./default";
export { SeparatedPanels } from "./separated-panels";
export { WithFormControls } from "./with-form-controls";
