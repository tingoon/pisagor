import { Presence as PresencePrimitive } from "@ark-ui/react/presence";
import type { ComponentProps } from "react";

// #region Types
export interface PresenceProps extends ComponentProps<typeof PresencePrimitive> {}
// #endregion

// #region Part
export function Presence({ lazyMount = true, unmountOnExit = true, ...rest }: PresenceProps) {
  return <PresencePrimitive {...rest} lazyMount={lazyMount} unmountOnExit={unmountOnExit} />;
}
// #endregion
