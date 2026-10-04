import controlled_positionRaw from "./controlled-position.tsx?raw";
import controlled_sizeRaw from "./controlled-size.tsx?raw";
import custom_spacingRaw from "./custom-spacing.tsx?raw";
import defaultRaw from "./default.tsx?raw";

export const imports = `import { FloatingPanel } from "@pisagor/solid";`;

export const sources = {
  ControlledPosition: controlled_positionRaw,
  ControlledSize: controlled_sizeRaw,
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
} as const;

export * from "./controlled-position";
export * from "./controlled-size";
export * from "./custom-spacing";
export * from "./default";
