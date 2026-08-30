import type { AvatarGroupRecipe } from "@pisagor/recipes/avatar";
import { createContext } from "../../internal/utils";

interface AvatarGroupContextValue {
  slots: AvatarGroupRecipe;
}

export const { AvatarGroupContext, useAvatarGroup } = createContext<AvatarGroupContextValue>()({
  name: "AvatarGroup",
});
