import actionsRaw from "./actions.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import footerRaw from "./footer.tsx?raw";
import not_hoverableRaw from "./not-hoverable.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { Table } from "@pisagor/solid";`;

export const sources = {
  Actions: actionsRaw,
  Default: defaultRaw,
  Footer: footerRaw,
  NotHoverable: not_hoverableRaw,
  Variants: variantsRaw,
} as const;

export * from "./actions";
export * from "./default";
export * from "./footer";
export * from "./not-hoverable";
export * from "./variants";
