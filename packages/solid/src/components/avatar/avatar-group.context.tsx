import type { AvatarGroupRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface AvatarGroupContextValue {
  slots: AvatarGroupRecipe;
}

export const { AvatarGroupContext, useAvatarGroup } =
  createContext("AvatarGroup")<AvatarGroupContextValue>();
