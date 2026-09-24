import type { LinkBoxRecipe } from "@pisagor/recipes/link-box";
import { createContext } from "../../utils/create-context";

export interface LinkBoxContextValue {
  slots: LinkBoxRecipe;
}

const ctx = createContext<LinkBoxContextValue>({ name: "LinkBox" });

export const setLinkBoxContext = ctx.setContext;
export const useLinkBox = ctx.getContext;
