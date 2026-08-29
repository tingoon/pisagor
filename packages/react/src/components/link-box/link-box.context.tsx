import type { LinkBoxSlots } from "@pisagor/recipes/link-box";
import { createContext } from "../../internal/utils";

interface LinkBoxContextValue {
  slots: LinkBoxSlots;
}

export const { LinkBoxContext, useLinkBox } = createContext<LinkBoxContextValue>()({
  name: "LinkBox",
});
