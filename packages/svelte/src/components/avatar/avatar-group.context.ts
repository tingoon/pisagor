import type { AvatarGroupRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface AvatarGroupContextValue {
  slots: AvatarGroupRecipe;
}

const ctx = createContext("AvatarGroup")<AvatarGroupContextValue>();
export const setAvatarGroupContext = ctx.setContext;
