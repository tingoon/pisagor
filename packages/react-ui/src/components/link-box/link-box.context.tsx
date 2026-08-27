import type { LinkBoxVariants } from "@pisagor/recipes/link-box";
import { createContext } from "../../utils";

interface LinkBoxContextValue {
  slots: LinkBoxVariants;
}

export const { LinkBoxContext, useLinkBox } = createContext<LinkBoxContextValue>()({
  name: "LinkBox",
});
