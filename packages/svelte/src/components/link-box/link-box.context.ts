import type { LinkBoxRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface LinkBoxContextValue {
  slots: LinkBoxRecipe;
}

const ctx = createContext("LinkBox")<LinkBoxContextValue>();

export const setLinkBoxContext = ctx.setContext;
export const useLinkBox = ctx.getContext;
