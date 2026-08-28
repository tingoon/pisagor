import type { AvatarVariants } from "@pisagor/recipes/avatar";
import { createContext } from "../../internal/utils";

interface AvatarContextValue {
  slots: AvatarVariants;
}

export const { AvatarContext, useAvatar } = createContext<AvatarContextValue>()({
  name: "Avatar",
});
