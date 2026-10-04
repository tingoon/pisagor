import type { ItemVariantProps } from "@pisagor/recipes";

import { createContext } from "../../utils";

export type ItemGroupContextValue = ItemVariantProps;

export const { ItemGroupContext, useItemGroup } = createContext(
  "ItemGroup",
)<ItemGroupContextValue>({ strict: false });
