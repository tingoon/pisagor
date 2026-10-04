import type { AvatarRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface AvatarContextValue {
  slots: AvatarRecipe;
}

const ctx = createContext("Avatar")<AvatarContextValue>();
export const setAvatarContext = ctx.setContext;
