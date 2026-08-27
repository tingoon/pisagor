import type { AvatarGroupVariants } from "@pisagor/recipes/avatar";
import { createContext } from "../../utils";

interface AvatarGroupContextValue {
  slots: AvatarGroupVariants;
}

export const { AvatarGroupContext, useAvatarGroup } = createContext<AvatarGroupContextValue>()({
  name: "AvatarGroup",
});
