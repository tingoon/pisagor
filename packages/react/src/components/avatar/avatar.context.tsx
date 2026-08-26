import type { AvatarVariants } from "@pisagor/recipes/avatar";
import { createContext } from "../../utils";

interface AvatarContextValue {
  slots: AvatarVariants;
}

export const { AvatarContext, useAvatar } = createContext<AvatarContextValue>()({
  name: "Avatar",
});
