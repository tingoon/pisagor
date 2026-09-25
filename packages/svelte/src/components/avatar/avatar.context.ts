import type { AvatarRecipe } from "@pisagor/recipes/avatar";
import { createContext } from "../../utils/create-context";

export interface AvatarContextValue {
  slots: AvatarRecipe;
}

const ctx = createContext<AvatarContextValue>({ name: "Avatar" });
export const setAvatarContext = ctx.setContext;
export const useAvatar = ctx.getContext;
