import type { AvatarGroupSlots } from "@pisagor/recipes/avatar";
import { createContext } from "../../internal/utils";

interface AvatarGroupContextValue {
  slots: AvatarGroupSlots;
}

export const { AvatarGroupContext, useAvatarGroup } = createContext<AvatarGroupContextValue>()({
  name: "AvatarGroup",
});
