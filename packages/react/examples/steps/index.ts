import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import descriptionRaw from "./description.tsx?raw";
import iconRaw from "./icon.tsx?raw";
import loadingRaw from "./loading.tsx?raw";
import titleRaw from "./title.tsx?raw";
import verticalRaw from "./vertical.tsx?raw";

export const imports = `import { Steps } from "@pisagor/react";`;

export const sources = {
  Controlled: controlledRaw,
  Default: defaultRaw,
  Description: descriptionRaw,
  Icon: iconRaw,
  Loading: loadingRaw,
  Title: titleRaw,
  Vertical: verticalRaw,
} as const;

export * from "./controlled";
export * from "./default";
export * from "./description";
export * from "./icon";
export * from "./loading";
export * from "./title";
export * from "./vertical";
