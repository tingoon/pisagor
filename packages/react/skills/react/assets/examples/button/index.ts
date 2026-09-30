import { stripTsxExample } from "@pisagor/utils";
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

export const imports = `import { Button } from "@pisagor/react/button";`;

export const sources = {
  AsChild: stripTsxExample(as_childRaw),
  CustomColor: stripTsxExample(custom_colorRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Icon: stripTsxExample(iconRaw),
  Loading: stripTsxExample(loadingRaw),
  NoClickEffect: stripTsxExample(no_click_effectRaw),
  Pill: stripTsxExample(pillRaw),
  Sizes: stripTsxExample(sizesRaw),
  Variants: stripTsxExample(variantsRaw),
  WithIcon: stripTsxExample(with_iconRaw),
} as const;

export { AsChild } from "./as-child";
export { CustomColor } from "./custom-color";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { Icon } from "./icon";
export { Loading } from "./loading";
export { NoClickEffect } from "./no-click-effect";
export { Pill } from "./pill";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
export { WithIcon } from "./with-icon";
