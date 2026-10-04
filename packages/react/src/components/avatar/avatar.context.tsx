import type { AvatarRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface AvatarContextValue {
  slots: AvatarRecipe;
}

export const { AvatarContext, useAvatar } =
  createContext("Avatar")<AvatarContextValue>();
