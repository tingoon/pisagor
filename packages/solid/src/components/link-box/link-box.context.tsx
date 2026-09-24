import type { LinkBoxRecipe } from "@pisagor/recipes/link-box";
import { createContext } from "../../utils";

interface LinkBoxContextValue {
  slots: LinkBoxRecipe;
}

export const { LinkBoxContext, useLinkBox } = createContext<LinkBoxContextValue>()({
  name: "LinkBox",
});
