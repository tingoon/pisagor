import type { LinkBoxVariants } from "@pisagor/styles/ui/link-box";
import { createContext } from "../../utils";

interface LinkBoxContextValue {
  slots: LinkBoxVariants;
}

export const { LinkBoxContext, useLinkBox } = createContext<LinkBoxContextValue>()({
  name: "LinkBox",
});
