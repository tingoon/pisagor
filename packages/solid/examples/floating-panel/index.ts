import { stripTsxExample } from "@pisagor/utils";
import controlled_positionRaw from "./controlled-position.tsx?raw";
import controlled_sizeRaw from "./controlled-size.tsx?raw";
import custom_spacingRaw from "./custom-spacing.tsx?raw";
import defaultRaw from "./default.tsx?raw";

export const imports = `import { FloatingPanel } from "@pisagor/solid";`;

export const sources = {
  ControlledPosition: stripTsxExample(controlled_positionRaw),
  ControlledSize: stripTsxExample(controlled_sizeRaw),
  CustomSpacing: stripTsxExample(custom_spacingRaw),
  Default: stripTsxExample(defaultRaw),
} as const;

export * from "./controlled-position";
export * from "./controlled-size";
export * from "./custom-spacing";
export * from "./default";
