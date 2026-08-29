import type { AvatarSlots } from "@pisagor/recipes/avatar";
import { createContext } from "../../internal/utils";

interface AvatarContextValue {
  slots: AvatarSlots;
}

export const { AvatarContext, useAvatar } = createContext<AvatarContextValue>()({
  name: "Avatar",
});
