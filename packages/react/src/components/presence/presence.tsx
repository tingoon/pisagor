import { Presence as PresencePrimitive } from "@ark-ui/react/presence";
import type { ComponentProps } from "react";

// #region Types
export type PresenceProps = ComponentProps<typeof PresencePrimitive>;
// #endregion

// #region Part
export function Presence(props: PresenceProps) {
  return <PresencePrimitive {...props} />;
}
// #endregion

// #region Display Names
Presence.displayName = "Presence";
// #endregion
