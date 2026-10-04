import controlled_positionRaw from "./controlled-position.vue?raw";
import controlled_sizeRaw from "./controlled-size.vue?raw";
import custom_spacingRaw from "./custom-spacing.vue?raw";
import defaultRaw from "./default.vue?raw";

export const imports = `import { FloatingPanel } from "@pisagor/vue";`;

export const sources = {
  ControlledPosition: controlled_positionRaw,
  ControlledSize: controlled_sizeRaw,
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
} as const;

export { default as ControlledPosition } from "./controlled-position.vue";
export { default as ControlledSize } from "./controlled-size.vue";
export { default as CustomSpacing } from "./custom-spacing.vue";
export { default as Default } from "./default.vue";
