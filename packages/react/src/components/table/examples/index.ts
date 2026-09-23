import { stripTsxExample } from "@pisagor/utils";
import actionsRaw from "./actions.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import footerRaw from "./footer.tsx?raw";
import not_hoverableRaw from "./not-hoverable.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { Table } from "@pisagor/react/table";`;

export const sources = {
  Actions: stripTsxExample(actionsRaw),
  Default: stripTsxExample(defaultRaw),
  Footer: stripTsxExample(footerRaw),
  NotHoverable: stripTsxExample(not_hoverableRaw),
  Variants: stripTsxExample(variantsRaw),
} as const;

export { Actions } from "./actions";
export { Default } from "./default";
export { Footer } from "./footer";
export { NotHoverable } from "./not-hoverable";
export { Variants } from "./variants";
