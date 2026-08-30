import type { AvatarRecipe } from "@pisagor/recipes/avatar";
import { createContext } from "../../internal/utils";

interface AvatarContextValue {
  slots: AvatarRecipe;
}

export const { AvatarContext, useAvatar } = createContext<AvatarContextValue>()({
  name: "Avatar",
});
