import as_childRaw from "./as-child.tsx?raw";
import custom_colorRaw from "./custom-color.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import iconRaw from "./icon.tsx?raw";
import loadingRaw from "./loading.tsx?raw";
import no_click_effectRaw from "./no-click-effect.tsx?raw";
import pillRaw from "./pill.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_iconRaw from "./with-icon.tsx?raw";

export const imports = `import { Button } from "@pisagor/solid";`;

export const sources = {
  AsChild: as_childRaw,
  CustomColor: custom_colorRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Icon: iconRaw,
  Loading: loadingRaw,
  NoClickEffect: no_click_effectRaw,
  Pill: pillRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithIcon: with_iconRaw,
} as const;

export * from "./as-child";
export * from "./custom-color";
export * from "./default";
export * from "./disabled";
export * from "./icon";
export * from "./loading";
export * from "./no-click-effect";
export * from "./pill";
export * from "./sizes";
export * from "./variants";
export * from "./with-icon";
