import type { AvatarGroupRecipe } from "@pisagor/recipes/avatar";
import { createContext } from "../../utils/create-context";

export interface AvatarGroupContextValue {
  slots: AvatarGroupRecipe;
}

const ctx = createContext<AvatarGroupContextValue>({ name: "AvatarGroup" });
export const setAvatarGroupContext = ctx.setContext;
export const useAvatarGroup = ctx.getContext;
