import { stripTsxExample } from "@pisagor/utils";
import controlledRaw from "./controlled.tsx?raw";
import custom_markersRaw from "./custom-markers.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import stepRaw from "./step.tsx?raw";
import thicknessRaw from "./thickness.tsx?raw";
import with_markersRaw from "./with-markers.tsx?raw";
import with_valueRaw from "./with-value.tsx?raw";

export const imports = `import { CircularSlider } from "@pisagor/react";`;

export const sources = {
  Controlled: stripTsxExample(controlledRaw),
  CustomMarkers: stripTsxExample(custom_markersRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Sizes: stripTsxExample(sizesRaw),
  Step: stripTsxExample(stepRaw),
  Thickness: stripTsxExample(thicknessRaw),
  WithMarkers: stripTsxExample(with_markersRaw),
  WithValue: stripTsxExample(with_valueRaw),
} as const;

export * from "./controlled";
export * from "./custom-markers";
export * from "./default";
export * from "./disabled";
export * from "./sizes";
export * from "./step";
export * from "./thickness";
export * from "./with-markers";
export * from "./with-value";
