import type { LinkBoxRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface LinkBoxContextValue {
  slots: LinkBoxRecipe;
}

export const { LinkBoxContext, useLinkBox } =
  createContext("LinkBox")<LinkBoxContextValue>();
